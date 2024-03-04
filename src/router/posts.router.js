const { Router } = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const postsController = require("../controllers/posts.controller");

const router = Router();

router.get("/", postsController.list);
router.get("/:id", postsController.read);

router.post(
  "/",
  authMiddleware.verifyToken,
  postsController.create
);

router.put(
  "/:id",
  authMiddleware.verifyToken,
  postsController.update
);

router.delete(
  "/:id",
  authMiddleware.verifyToken,
  postsController.destroy);

module.exports = router;
