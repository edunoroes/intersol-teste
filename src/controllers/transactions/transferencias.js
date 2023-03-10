const knex = require("../../config/connections");

const transferencias = async (req, res) => {
  try {
    const { id: usuario } = req.userLogged;
    const { contaDestino, valor } = req.body;

    const [contaEnvio, contaRecebe] = await Promise.all([
      knex("contas").select("*").where("conta_usuario_id", usuario),
      knex("contas").select("*").where({ numero_conta: contaDestino }),
    ]);
    
    if (!contaEnvio[0] || !contaRecebe[0]) {
      return res.status(404).json({ mensagem: "Conta inexistente" });
    }

    if (contaEnvio[0].limite < valor) {
      return res.status(401).json({ error: "Saldo insuficiente" });
    }

    await knex("transacoes").insert({
      tipo: "transfencia",
      valor,
      data_movimentacao: new Date(),
      conta_bancaria: contaRecebe[0].numero_conta,
      usuario
    });

    await knex.transaction(async (trx) => {
      await trx("contas")
        .where( "numero_conta", "=", contaEnvio[0].numero_conta)
        .decrement("limite", valor);
      await trx("contas")
        .where("numero_conta", "=", contaRecebe[0].numero_conta)
        .increment("limite", valor);
    });

    res.status(200).json({mensagem:"Transferencia Realizada com sucesso"});
  } catch (error) {
    console.log(error);
  }
};

module.exports = transferencias;
