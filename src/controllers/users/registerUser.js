const knex = require("../../config/connections");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { nome, username, email, senha } = req.body;

  try {
    const existingUser = await knex("usuarios")
      .where({ email })
      .orWhere({ username })
      .first();


    if (existingUser) {
      return res.status(400).json("O e-mail inválido");
    }

    const encryptedPassword = await bcrypt.hash(senha, 10);

    const usuario = await knex("usuarios").insert({
      nome,
      email,
      username,
      senha: encryptedPassword,
    });

    if (!usuario) {
      return res.status(500).json("O usuário não foi cadastrado");
    }

    return res.status(201).json("Usuário cadastrado com sucesso");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
  registerUser,
};
