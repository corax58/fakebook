const Post = require("../models/postModel");
const mongoose = require("mongoose");
// get all posts
const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// get a single post

const getSinglePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.find({ heading: heading });

  if (!post) {
    return res.status(404).json({ error: "No post" });
  }

  res.status(200).json(post);
};

// create a new post
const createPost = async (req, res) => {
  const { postedBy, heading, body } = req.body;

  try {
    const post = await Post.create({
      postedBy,
      heading,
      body,
      likes: 0,
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

// delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

// update a post
const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such post" });
  }
  const { heading, body } = req.body;

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!post) {
    return res.status(404).json({ error: "No such post" });
  }

  res.status(200).json(post);
};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePost,
};
