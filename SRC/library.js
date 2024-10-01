class Library {
  constructor() {
    this.books = [
      {
        id: 1,
        title: "The Hungry Empire",
        author: "Lizzie Collingham",
        genre: "History",
        publishedYear: 2021,
        availability: true,
      },
      {
        id: 2,
        title: "Indian Summer",
        author: "Alex Von Tunzelmann",
        genre: "History",
        publishedYear: 2021,
        availability: true,
      },
      {
        id: 3,
        title: "L’Auberge Rouge • The Red Inn",
        author: "Honoré de Balzac",
        genre: "Fiction",
        publishedYear: 1831,
        availability: true,
      },
    ];
    // Initialize the last assigned ID
    this.lastId =
      this.books.length > 0 ? this.books[this.books.length - 1].id : 0;
  }

  add_book(book) {
    // Increment the lastId for the new book
    this.lastId++;
    book.id = this.lastId; // Assign the new ID
    console.log(`Book added with ID: ${this.lastId}`);
    this.books.push(book);
  }

  list_books() {
    this.books.forEach((book) => {
      console.log(
        `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Year: ${book.publishedYear}, Available: ${book.availability}`
      );
    });
  }

  search_books(value) {
    return this.books.filter((book) => book.title === value);
  }

  update_book(id, updatedBook) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
      return true;
    }
    return false;
  }

  delete_book(title) {
    this.books = this.books.filter((b) => b.title !== title);
  }

  getBook_state(book) {
    return book.availability ? "available" : "Not available";
  }

  save_to_file(filename) {
    const fs = require("fs"); // Ensure fs is required for file operations
    fs.writeFileSync(filename, JSON.stringify(this.books, null, 2));
    console.log(`Saved to ${filename}`);
  }

  load_from_file(filename) {
    const fs = require("fs"); // Ensure fs is required for file operations
    if (fs.existsSync(filename)) {
      const data = fs.readFileSync(filename, "utf8");
      this.books = JSON.parse(data);
      // Update lastId based on loaded books
      this.lastId =
        this.books.length > 0 ? this.books[this.books.length - 1].id : 0;
      console.log(`Loaded from ${filename}`);
    } else {
      console.log(`File ${filename} does not exist.`);
    }
  }

  list_add_book() {
    return this.books;
  }
}
window.Library = Library;
