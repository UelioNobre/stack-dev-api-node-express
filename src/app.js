require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const PORT = process.env.API_PORT || 3000;

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json({ info: `API running on port: ${PORT}` }));

app.post('/', (req, res) => {
  const { body } = req;
  return res.json({ info: 'Body modificado', body });
});

module.exports = app;
