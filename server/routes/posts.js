const express = require("express");
const {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
} = require("../controllers/postController");

const router = express.Router();

//get all posts
router.get("/", getAllPosts);

//get a single post
router.get("/:id", getSinglePost);

//POST a post
router.post("/", createPost);

//DELETE A POST
router.delete("/:id", deletePost);

//UPDATE A POST
router.patch("/:id", updatePost);

module.exports = router;
