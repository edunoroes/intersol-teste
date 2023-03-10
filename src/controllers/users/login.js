const knex = require("../../config/connections");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { login, senha } = req.body;
  let userLogin;
  login.trim();

  if (!login) {
    return res.status(400).json("Digite seu login");
  }

  try {
    if (login) {
      userLogin = await knex("usuarios")
        .where({ username: login })
        .orWhere({ email: login })
        .first();
    }

    if (!userLogin) {
      return res.status(400).json("Usuário e/ou senha inválido(s).");
    }

    const passCorrect = await bcrypt.compare(senha, userLogin.senha);

    if (!passCorrect) {
      return res.status(400).json("Usuário e/ou senha inválido(s).");
    }

    const token = jwt.sign({ id: userLogin.id }, process.env.HASHPASSWORD, {
      expiresIn: "6h",
    });

    const { senha: _, ...userData } = userLogin;

    return res.status(200).json({
      ...userData,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Erro interno do servidor:${error.message}`);
  }
};

module.exports = {
  login,
};
