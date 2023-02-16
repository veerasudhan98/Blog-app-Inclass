//Packages
const { Router } = require("express");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");

// Files model
const BlogPost = require("./model/BlogPost");

const { PORT, MONGODB_URL } = process.env;

//Connect app to the mongodb database
mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

//Create Express app
const app = express();
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

//Routes
app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {
    blogposts,
  }); //This is ejs/html file in views folder
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post/:id", async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id);
  res.render("post", {
    blogpost,
  });
});
app.get("/posts/new", (req, res) => {
  res.render("create");
});
app.post("/posts/store", async (req, res) => {
  await BlogPost.create(req.body, (error, blogpost) => {
    console.log("new date create: ", blogpost, error);
    res.redirect("/");
  });
});

//Server
app.listen(PORT, () => {
  console.log("listening on Port " + PORT);
});
