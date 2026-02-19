import fs from "fs";
import path from "path";
import { Book } from "../models/Book";

const filePath = path.join(__dirname, "../../books.json");

export function getAllBooks(): Book[] {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }

  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function saveBooks(books: Book[]): void {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}
