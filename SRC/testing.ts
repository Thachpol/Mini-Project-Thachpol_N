import { Library } from "./library";
import { Book, Genre } from "./book";

const library = new Library();
// Add books
library.add_book({
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: Genre.Fiction,
  publishedYear: 1925,
  availability: true,
});
library.add_book({
  id: 2,
  title: "To Kill a Mocking bird",
  author: "Harper Lee",
  genre: Genre.Fiction,
  publishedYear: 1960,
  availability: true,
});

// List books
library.list_books();

// Search books
console.log(library.search_books("author", "Harper Lee"));

// Update book
library.update_book(1, { availability: false });
library.list_books();

// Delete book
library.delete_book(1);
library.list_books();

// Get book state
console.log(
  library.getBook_state({
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: Genre.Fiction,
    publishedYear: 1925,
    availability: false,
  })
);

// Save to file
library.save_to_file("books.json");

// Load from file
library.load_from_file("books.json");
library.list_books();
