let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author} | ${this.pages} pages | read: ${this.read}`;
}

function addBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book);
}

// test
addBook('The Hobbit', 'J.R.R. Tokien', 295, false);

const table = document.querySelector('table');

library.forEach(book => {
    table.innerHTML += `<tr>
                            <td>
                                ${book.title}
                            </td>
                            <td>
                                ${book.author}
                            </td>
                            <td>
                                ${book.pages}
                            </td>
                            <td>
                                ${book.read}
                            </td>
                        </tr>`
});

const btnShow = document.getElementById('btn-show');
const form = document.querySelector('form');
btnShow.addEventListener('click', () => {
    form.style.display = 'block';
    btnShow.style.display = 'none';
});

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', () => {
    /*
        ADD BOOKS HERE
    */

    btnShow.style.display = 'block';
    form.style.display = 'none';
});