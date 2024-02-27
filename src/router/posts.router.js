const { Router } = require('express')
const postsController = require('../controllers/posts.controller')

const router = Router()

router.post('/', postsController.create)
router.get('/:id', postsController.read)
router.get('/', postsController.list)
router.delete('/:id', postsController.destroy)
router.put('/:id', postsController.update)

module.exports = router
