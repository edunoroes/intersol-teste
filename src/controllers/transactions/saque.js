const knex = require("../../config/connections");

const saque = async (req, res) => {
  try {
    const { id: usuario } = req.userLogged;
    const { valor } = req.body;

    const account = await knex("contas").select('*').where('conta_usuario_id',"=",usuario).first();

    if (!account) {
      return res.status(404).json({ error: "Conta bancária não encontrada." });
    }

    if (account.limite < valor) {
      return res.status(401).json({ error: "Saldo insuficiente" });
    }

    await knex("transacoes").insert({
      tipo: "saque",
      valor,
      data_movimentacao: new Date(),
      conta_bancaria: account.numero_conta,
      usuario,
    });

    await knex("contas")
      .where("numero_conta", "=",  account.numero_conta)
      .decrement("limite", valor);

    return res.status(201).json({ mensagem: "Saque realizado com sucesso" });
  } catch (error) {
    console.error(error);
    console.log(error);
    return res.status(500).json({ error: "Erro ao registrar o saque." });
  }
};

module.exports = saque;
