require("dotenv").config();
const express = require("express");
const router = require("./router");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(process.env.PORT || 3001,
    () => console.log(`running on port ${process.env.PORT}`)
);
