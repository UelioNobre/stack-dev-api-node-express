const { Router } = require('express')
const homeRouter = require('./home.router')
const postsRouter = require('./posts.router')
const usersRouter = require('./users.router')
const loginRouter = require('./login.router')

const router = Router({ caseSensitive: true });

router.use('/', homeRouter)
router.use('/login', loginRouter)
router.use('/posts', postsRouter)
router.use('/users', usersRouter)

module.exports = router;