const path = require("path");
// Model
const BlogPost = require("../model/BlogPost");

module.exports = async (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "../public/img", image.name), (error) => {
    console.log("error:", error);
    // Sending data to db
    BlogPost.create(
      { ...req.body, image: "/img/" + image.name },
      (error, post) => {
        console.log("created...", post, error);
      }
    );
    res.redirect("/");
  });
};
