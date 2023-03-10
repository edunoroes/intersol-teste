const knex = require("../../config/connections");

const conta = async (req, res) => {
  const { id: usuario } = req.userLogged;

  try {
    const { agencia_bancaria, numero_conta } = req.body;
    const dataFlow = await knex("agencias")
      .where({
        numero_agencia: agencia_bancaria,
      })
      .first();

    if (!dataFlow) {
      return res.status(404).json({ error: "Agencia não encontrada" });
    }

    const data = await knex("contas")
      .where({
        numero_conta,
      })
      .first();

    if (data) {
      return res.status(404).json({ error: "A conta já existe" });
    }

    const account = await knex("contas")
      .where("conta_usuario_id", usuario)
      .first();
    if (account) {
      res
        .status(401)
        .json({ message: "Já existe uma conta vinculada ao usuario logado" });
      return;
    }

    await knex("contas").insert({
      agencia_bancaria: dataFlow.numero_agencia,
      numero_conta,
      limite:limite=0,
      conta_usuario_id: usuario,
    });

    res.json({ message: "Conta bancária criada com sucesso!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = conta;
