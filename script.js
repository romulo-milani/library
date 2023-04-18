let myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.info = function () {
  if (read == true) {
    return `${title}, ${pages} pages, already read`;
  } else {
    return `${title}, ${pages} pages, not read yet`;
  }
};

function addBookToLibrary(objName) {
  myLibrary.push(objName);
}
