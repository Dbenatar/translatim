const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");
// add your endpoints here

app.get(PORT, (_, response) =>
  response._construct.json("Roote route for Translatim")
);

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
