let myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    addBookToLibrary();
  });
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function render() {
  let library_div = document.querySelector("#library");
  library_div.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let book_div = document.createElement("div");
    book_div.setAttribute("class", "book-card");
    book_div.innerHTML = `<div class="card-header>"
  <h3 class="title"> ${book.title} </h3>
  <h5 class="author"> ${book.author} </h5>
  </div>
  <div class="card-body">
  <p>${book.pages}</p>
  <p class="read-status"> ${book.read ? "Read" : "Not  Read Yet"} </p>
  <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
  <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>

  </div>`;
    library_div.appendChild(book_div);
  }
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookbutton = document.querySelector("#new-book-btn");
newBookbutton.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});
