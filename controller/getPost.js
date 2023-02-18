// Model
const BlogPost = require("../model/BlogPost");

module.exports = async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render("post", {
    blogpost,
  });
};
