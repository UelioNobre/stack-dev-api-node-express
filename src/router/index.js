const { Router } = require('express')
const homeRouter = require('./home.router')
const postsRouter = require('./posts.router')

const router = Router({ caseSensitive: true });

router.use('/', homeRouter)
router.use('/posts', postsRouter)

module.exports = router;