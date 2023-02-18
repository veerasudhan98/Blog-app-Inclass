// Model
const BlogPost = require("../model/BlogPost");

module.exports = async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {
    blogposts,
  }); //This is ejs/html file in views folder
};
