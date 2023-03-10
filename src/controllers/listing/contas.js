const knex = require("../../config/connections");

const listContas = async (req, res) => {
  const { id: usuario } = req.userLogged;
  try {
    const contas = await knex('contas').select().where("conta_usuario_id", usuario);
    res.json(contas);
  } catch (error) {
  }
};

module.exports = listContas;
