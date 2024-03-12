const express = require("express");
const {
  createPost,
  getAllPosts,
  getSinglePost,
  getSearchPosts,
  deletePost,
  updatePost,
} = require("../controllers/postController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth
router.use(requireAuth);
//get all posts
router.get("/", getAllPosts);

//get a single post
router.get("/:id", getSinglePost);

//get search
router.get("/search/:query", getSearchPosts);

//POST a post
router.post("/", createPost);

//DELETE A POST
router.delete("/:id", deletePost);

//UPDATE A POST
router.patch("/:id", updatePost);

module.exports = router;
