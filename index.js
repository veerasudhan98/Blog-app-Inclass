// Packages
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

// Custom middleware
const validateMiddleWare = require("./middleware/validationMiddleware");

// Controllers
const storePost = require("./controller/storePost");
const newPost = require("./controller/newPost");
const getPost = require("./controller/getPost");
const home = require("./controller/home");

// Store as environment variables inside .env
const { PORT, MONGODB_URL } = process.env;

// Connect app to the mongodb database
mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

// Create Express app
const app = express();
// Setting up ejs as the default view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());

app.use("/posts/store", validateMiddleWare);

// Routes
app.get("/", home);
app.get("/post/:id", getPost);
app.get("/posts/new", newPost);
app.post("/posts/store", storePost);

// Server
app.listen(PORT, () => {
  console.log("listening on Port " + PORT);
});
