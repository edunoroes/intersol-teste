const knex = require("../../config/connections");

const deposito = async (req, res) => {
  try {
    const { id: usuario } = req.userLogged;
    const { valor } = req.body;

    const account = await knex("contas").select('*').where('conta_usuario_id',"=",usuario).first();
   
    if (!account) {
      return res.status(404).json({ error: "Conta bancária não encontrada." });
    }

    await knex("transacoes").insert({
      tipo: "deposito",
      valor,
      data_movimentacao: new Date(),
      conta_bancaria: account.numero_conta,
      usuario,
    });

    await knex("contas")
      .where("numero_conta", "=", account.numero_conta)
      .increment("limite", valor)
      .then(() => {
        console.log("Valor de depósito atualizado com sucesso!");
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao atualizar o valor de depósito:", error);
      });

    return res.status(201).json({ mensagem: "Deposito realizado com sucesso" });
  } catch (error) {
    console.error(error);
    console.log(error);
    return res.status(500).json({ error: "Erro ao registrar o depósito." });
  }
};

module.exports = deposito;
