require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router')

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(router);

module.exports = app;
