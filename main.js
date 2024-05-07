const myLibrary = [];

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

const dialog = document.querySelector('dialog');
const addBookButton = document.querySelector('#add-book');
const dialogCloseButton = document.querySelector('.dialog-close');
const form = dialog.querySelector('form');

addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

dialogCloseButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = form.querySelector('#title').value;
    const author = form.querySelector('#author').value;
    const pages = form.querySelector('#pages').value;
    const genre = form.querySelector('#genre').value;
    addBookToLibrary(title, author, pages, genre);
    form.reset();
    dialog.close();
});

const bookshelf = document.querySelector('#book-card-container');

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
            <p id="bookPages">${book.pages} pages</p>
            <button id="readButton">Read</button>
        `;

        bookshelf.appendChild(bookCard);
    })
};

displayBooks();