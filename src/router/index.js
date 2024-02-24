const { Router } = require('express')
const homeRouter = require('./home.router')

const router = Router({ caseSensitive: true });

router.use('/', homeRouter)

module.exports = router;