const myLibrary = [];
const bookshelf = document.querySelector('#book-card-container');
const dialog = document.querySelector('dialog');
const addBookButton = document.querySelector('#add-book');
const dialogCloseButton = document.querySelector('.dialog-close');
const form = dialog.querySelector('form');

function Book(title, author, pages, genre, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, genre) {
    const newBook = new Book(title, author, pages, genre, false);
    myLibrary.push(newBook);
    displayBooks();
}

// Default books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'Fantasy');
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'Classic');
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 214, 'Classic');

addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = form.querySelector('#title').value;
    const author = form.querySelector('#author').value;
    const pages = form.querySelector('#pages').value;
    const genre = form.querySelector('#genre').value;
    addBookToLibrary(title, author, pages, genre);
    form.reset();
    dialog.close();
});

const xButton = document.querySelector('#x-button');

xButton.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
});

function displayBooks() {
    bookshelf.innerHTML = ''; // Clear the bookshelf before displaying the books
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("li");
        bookCard.classList.add('book-card');
        bookCard.id = `book-id-${index}`;
        bookCard.innerHTML = `
            <h2 id="bookTitle">${book.title}</h2>
            <p id="bookAuthor">${book.author}</p>
            <p id="bookGenre">${book.genre}</p>
            <p id="bookPages"><b>${book.pages}</b> pages</p>
            <button id="readButton">Read</button>
        `;

        bookshelf.appendChild(bookCard);
    })
};

displayBooks(); // Display the books when the page loads