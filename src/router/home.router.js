require('dotenv').config();
const { Router } = require('express')

const PORT = process.env.API_PORT;

const router = Router();

router.get('/', (req, res) => res.json({ info: `API running on port: ${PORT}` }));

module.exports = router;