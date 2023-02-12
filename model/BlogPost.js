const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// First schema
const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

// Link schema with the collection
const BlogPost = mongoose.model("BlogPost", BlogPostSchema); // (Name_of_collection, Name_of_schema)

// Exporting the schema
module.exports = BlogPost;
