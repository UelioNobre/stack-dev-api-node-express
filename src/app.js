require('dotenv').config();
const express = require('express');

require('express-async-errors')

const morgan = require('morgan')
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router')
const errorHandlers = require('./middlewares/error.middleware')

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));
app.use(router);
app.use(errorHandlers)

module.exports = app;
