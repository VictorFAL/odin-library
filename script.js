let library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author} | ${this.pages} pages | read: ${this.read}`;
    }

    toggleRead() {
        this.read == 'yes' ? this.read = 'no' : this.read = 'yes';
    }
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
        table.innerHTML += `<tr data-index="${index}">
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
                                    <button class="btn-read">${book.read}</button>
                                </td>
                                <td>
                                    <button class="btn-del">DEL</button>
                                </td>
                            </tr>`;
    });

    // Delete book by pressing the button
    let btnsDel = document.querySelectorAll('.btn-del');

    btnsDel.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            library.splice(index, 1);
            buildTable()
        });
    });

    // Read button toggle
    let btnsRead = document.querySelectorAll('.btn-read');
    btnsRead.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            library[index].toggleRead();
            buildRow(index);
        });
    });
}

// Refresh row
function buildRow(index) {
    let row = document.querySelector(`[data-index="${index}"]`);
    let book = library[index];

    row.innerHTML = `<td>
                        ${book.title}
                    </td>
                    <td>
                        ${book.author}
                    </td>
                    <td>
                        ${book.pages}
                    </td>
                    <td>
                        <button class="btn-read">${book.read}</button>
                    </td>
                    <td>
                        <button class="btn-del">DEL</button>
                    </td>`;
    
    // Read button toggle
    let btnRead = row.querySelector('.btn-read');

    btnRead.addEventListener('click', () => {
        book.toggleRead();
        buildRow(index);
    });

    // Delete book by pressing the button
    let btnDel = row.querySelector('.btn-del');

    btnDel.addEventListener('click', () => {
        library.splice(index, 1);
        buildTable();
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
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;

    addBook(title, author, pages, read);
    buildTable();

    btnShow.style.display = 'block';
    form.style.display = 'none';
});

// Show table headers
buildTable();