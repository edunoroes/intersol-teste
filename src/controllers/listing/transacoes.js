const knex = require("../../config/connections");

const listTransacoes = async (req, res) => {
  try {
    const { id: usuario } = req.userLogged;
    const transacoes = await knex("transacoes")
      .select("*")
      .where("usuario", usuario);
    res.json(transacoes);
  } catch (error) {}
};

module.exports = listTransacoes;
