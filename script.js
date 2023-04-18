//MY ENTIRE LIBRARY IS IN THIS ARRAY
let myLibrary = [];

//MODEL FOR THE BOOKS

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//FUNCTION THAT DISPLAYS THE INFO OF JUST ONE CHOSEN BOOK, ERASE IF NOT NEEDED!!!!

Book.prototype.info = function () {
  if (read == true) {
    return `${title}, ${pages} pages, already read`;
  } else {
    return `${title}, ${pages} pages, not read yet`;
  }
};

//ADD A NEW BOOK TO THE TABLE

function addBookToLibrary(bookName) {
  myLibrary.push(bookName);
}

//SHOWS THE ENTIRE LIBRARY
function showLibrary() {
  myLibrary.forEach((element) => {
    console.log(`Book title: ${element.title}\n`);
    console.log(`Author: ${element.author}\n`);
    console.log(`Number of pages: ${element.pages}`);
    console.log(`Read? ${element.read}\n\n`);
  });
}

/* ADDING A FEW TEST BOOKS

const hp = new Book("HP and the Phylosopher Stone", "JK Roling", 200, true);
const hobbit = new Book("Hobbit", "Tolkien", 300, true);
const it = new Book("it", "Stephen King", 1200, false);

addBookToLibrary(hp);
addBookToLibrary(hobbit);
addBookToLibrary(it);

showLibrary();
*/
