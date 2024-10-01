import { Book } from "./book";
import * as fs from "fs";
type BookState = "available" | "Not available";

export class Library {
  private books: Book[] = [];

  add_book(book: Book): void {
    this.books.push(book);
  }

  list_books(): void {
    this.books.forEach((book) => {
      console.log(
        `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Year: ${book.publishedYear}, Available: ${book.availability}`
      );
    });
  }

  search_books<K extends keyof Book>(key: K, value: Book[K]): Book[] {
    return this.books.filter((book) => book[key] === value);
  }

  update_book(id: number, updatedFields: Partial<Book>): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updatedFields };
    }
  }

  delete_book(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }

  getBook_state(book: Book): BookState {
    return book.availability ? "available" : "Not available";
  }

  save_to_file(filename: string): void {
    fs.writeFileSync(filename, JSON.stringify(this.books, null, 2));
    console.log(`Saved to ${filename}`);
  }

  load_from_file(filename: string): void {
    if (fs.existsSync(filename)) {
      const data = fs.readFileSync(filename, "utf8");
      this.books = JSON.parse(data);
      console.log(`Loaded from ${filename}`);
    } else {
      console.log(`File ${filename} does not exist.`);
    }
  }
}
