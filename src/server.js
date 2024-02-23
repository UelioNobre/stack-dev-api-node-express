require('dotenv').config()

const app = require('./app')
const PORT = process.env.API_PORT || 4000
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))