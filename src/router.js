const express = require("express");
const listAgencias = require("./controllers/listing/agencias");
const listContas = require("./controllers/listing/contas");
const listTransacoes = require("./controllers/listing/transacoes");
const agencia = require("./controllers/register/agencia");
const conta = require("./controllers/register/conta");
const deposito = require("./controllers/transactions/deposito");
const estornos = require("./controllers/transactions/estornos");
const saque = require("./controllers/transactions/saque");
const transferencias = require("./controllers/transactions/transferencias");
const { login } = require("./controllers/users/login");
const { registerUser } = require("./controllers/users/registerUser");
const { verifyLogin } = require("./middlewares/verifyLogin");
const router = express();


router.post("/cadastro", registerUser);
router.post("/login", login)

router.use(verifyLogin);

router.post("/agencia", agencia);
router.get("/agencias",listAgencias);
router.post("/conta",conta)
router.get("/contas",listContas);
router.post("/deposito", deposito);
router.post("/saque", saque);
router.post("/transferencia", transferencias);
router.post("/estorno", estornos);
router.get("/transacoes", listTransacoes);


module.exports = router;
