const { Router } = require('express')
const postsController = require('../controllers/posts.controller')

const router = Router()

router.post('/', postsController.create)
router.get('/', postsController.list)

module.exports = router
