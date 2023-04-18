//MY ENTIRE LIBRARY IS IN THIS ARRAY
let myLibrary = [];

//MODEL FOR THE BOOKS

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//DISPLAYS THE BOOK LIST IN THE HTML TABLE
function showLibrary() {
  const table = document.querySelector("#table");
  const deleteElement = document.querySelectorAll(".delete");
  deleteElement.forEach((element) => element.remove()); //DELETE THE OLD TABLE SO THAT IT DOESN'T REPEAT

  myLibrary.forEach((element) => {
    const newRow = document.createElement("tr");
    newRow.classList.add("delete");

    const titleCell = document.createElement("td");
    titleCell.classList.add("delete");
    titleCell.innerText = `${element.title}`;
    newRow.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.classList.add("delete");
    authorCell.innerText = `${element.author}`;
    newRow.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.classList.add("delete");
    pagesCell.innerText = `${element.pages}`;
    newRow.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.classList.add("delete");
    readCell.innerText = `${element.read}`;
    newRow.appendChild(readCell);

    table.appendChild(newRow);
  });
}

//ADD A NEW BOOK TO THE LIBRARY
const addBookToLibrary = (event) => {
  event.preventDefault(); //prevents the form from submiting
  let newBook = {
    //create an object based on the user input information
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    pages: document.querySelector("#pages").value,
    read: document.querySelector("#read").value,
  };

  myLibrary.push(newBook); //add the object to the library array
  document.querySelector("form").reset(); //clear the form for the next entries
  showLibrary();
};

const form = document.addEventListener("submit", addBookToLibrary);
