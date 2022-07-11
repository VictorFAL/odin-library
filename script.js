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

// Add book obj to array
function addBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book);
}

// Refresh table data
const table = document.querySelector('table');
function buildTable() {
    table.innerHTML =   `<tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Pages</th>
                            <th>Read</th>
                        </tr>`;
    
    library.forEach((book, index) => {
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
                                <td>
                                    <button class="btn-del" data-index="${index}">DEL</button>
                                </td>
                            </tr>`
    });

    // Delete book by pressing the button
    let btnsDel = document.querySelectorAll('.btn-del');

    btnsDel.forEach(btn => {
        btn.addEventListener('click', () => {
            library.splice(btn.dataset.index, 1);
            buildTable()
        });
    });
}


// Make book form appear
const btnShow = document.getElementById('btn-show');
const form = document.querySelector('form');
btnShow.addEventListener('click', () => {
    form.style.display = 'block';
    btnShow.style.display = 'none';
});


// Add form data to table
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', () => {
    addBook(title.value, author.value, pages.value, read.value);
    buildTable();

    btnShow.style.display = 'block';
    form.style.display = 'none';
});

// Show table headers
buildTable();