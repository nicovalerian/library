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

function addBookToLibrary(title, author, pages, genre, readStatus) {
    const newBook = new Book(title, author, pages, genre, readStatus);
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
    const readStatus = form.querySelector('#readStatus').value === 'read' ? true : false;
    console.log(form.querySelector('#readStatus'))
    addBookToLibrary(title, author, pages, genre, readStatus);
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
            <p id="bookReadStatus">${book.readStatus ? 'Read' : 'Not read'}</p>
            <button id="readButton">Read</button>
            <button id="deleteButton">Delete</button>
        `;

        bookshelf.appendChild(bookCard);
    })
};

bookshelf.addEventListener('click', (event) => { // Delete book when delete button is clicked
    if (event.target.id === 'deleteButton') {
        const bookCard = event.target.closest('.book-card');
        const bookId = bookCard.id.split('-')[2];
        myLibrary.splice(bookId, 1);
        displayBooks();
    }
});

displayBooks(); // Display the books when the page loads