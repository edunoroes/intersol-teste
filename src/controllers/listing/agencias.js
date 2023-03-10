const knex = require("../../config/connections");

const listAgencias = async (req, res) => {
  try {
    const agencias = await knex('agencias').select();
    res.json(agencias);
  } catch (error) {
  }
};

module.exports = listAgencias;
