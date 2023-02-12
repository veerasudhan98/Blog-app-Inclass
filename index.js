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

//mainframe
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.render("index"); //This is ejs/html file in views folder
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

// CRUD Opertation

// Create
BlogPost.create(
  {
    title: "My first blog",
    body: "I'm excited for it!",
  },
  (error, blogPost) => {
    console.log(error, blogPost);
  }
);

// Read data find, findById
BlogPost.find(
  {
    title: /first/,
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);

// Read data find, findById
BlogPost.findById(
  {
    _id: "63dd21f3e273b69c495be69f",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);

// Update
BlogPost.findByIdAndUpdate(
  "63dd21f3e273b69c495be69f",
  {
    title: "The updated first blog",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);

// Update
BlogPost.findByIdAndDelete("63dd21f3e273b69c495be69f", (error, blogpost) => {
  console.log(error, blogpost);
});
//Server
app.listen(PORT, () => {
  console.log("listening on Port " + PORT);
});
