const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

app.get("/", (req, res) => {
  res.render("index", { books: books });
});

app.post("/add-book", (req, res) => {
  console.log(req.body);
  const newBook = { title: req.body.title, author: req.body.author };
  books.push(newBook);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
