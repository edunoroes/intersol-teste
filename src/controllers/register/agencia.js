const knex = require("../../config/connections");

const agencia = async (req, res) => {
  try {
    
    const { numero_agencia, endereco } = req.body;
    await knex("agencias").insert({ numero_agencia, endereco });
    res.json({ message: "Agência bancária criada com sucesso!" });
    
  } catch (error) {}
};

module.exports = agencia;
