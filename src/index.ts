import express from "express";
import path from "path";
import {
  homePage,
  listBooks,
  searchBooks,
  addBook
} from "./controllers/bookController";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", homePage);
app.get("/books", listBooks);
app.get("/books/search", searchBooks);
app.post("/books", addBook);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
