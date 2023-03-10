const jwt = require("jsonwebtoken");
const knex = require("../config/connections");

const verifyLogin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json("Usuário não autorizado");
    }

    const token = authorization.replace("Bearer ", "").trim();

    const { id } = jwt.verify(token, process.env.HASHPASSWORD);

    const userLogin = await knex("usuarios").where("id", id).first();

    if (!userLogin) {
      return res.status(401).json("Usuário não autorizado");
    }

    const { senha: _, ...dataUser } = userLogin;

    req.userLogged = dataUser;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json('Erro interno do servidor');
  }
}

module.exports = {
  verifyLogin,
}
