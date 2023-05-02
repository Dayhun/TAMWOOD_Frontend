//npm init -y
//npm install express cors
//npm install nodemon --save-dev
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get
