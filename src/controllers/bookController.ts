import { Request, Response } from "express";
import { getAllBooks, saveBooks } from "../services/fileDb";
import { Book } from "../models/Book";

export function homePage(req: Request, res: Response): void {
  res.render("index");
}

export function listBooks(req: Request, res: Response): void {
  const books = getAllBooks();
  res.render("books", { books });
}

export function searchBooks(req: Request, res: Response): void {
  const name = (req.query.name as string) || "";
  const books = getAllBooks();

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(name.toLowerCase())
  );

  res.render("search", { books: filteredBooks, query: name });
}

export function addBook(req: Request, res: Response): void {
  const books = getAllBooks();

  const newBook: Book = {
    id: Date.now(),
    name: req.body.name,
    author: req.body.author,
    price: Number(req.body.price)
  };

  books.push(newBook);
  saveBooks(books);

  res.redirect("/books");
}
