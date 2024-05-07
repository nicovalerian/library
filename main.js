const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages, false);
    myLibrary.push(newBook);
}