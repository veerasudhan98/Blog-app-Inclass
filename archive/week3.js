// CRUD Opertation

// // Create
// BlogPost.create(
//   {
//     title: "My first blog",
//     body: "I'm excited for it!",
//   },
//   (error, blogPost) => {
//     console.log(error, blogPost);
//   }
// );

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

// // Update
// BlogPost.findByIdAndUpdate(
//   "63dd21f3e273b69c495be69f",
//   {
//     title: "The updated first blog",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// // Update
// BlogPost.findByIdAndDelete("63dd21f3e273b69c495be69f", (error, blogpost) => {
//   console.log(error, blogpost);
// });

//Server
app.listen(PORT, () => {
  console.log("listening on Port " + PORT);
});

module.exports = async (req, res) => {
  const userdetails = await g2.find({ uid: req.body.uid });
  if (userdetails === null) {
    const errormessage = "No uid found, Please re-enter details";
    res.redirect("gtest?error=" + errormessage);
  } else {
    res.render("gtest", {
      userdata: userdetails,
    });
  }
};
