let myLibrary = []; //MY ENTIRE LIBRARY IS IN THIS ARRAY

function Book(title, author, pages, status) {
  //CONTRUCTOR FUNCTION FOR THE BOOKS
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status);
}

function showLibrary() {
  //DISPLAYS THE LAST ADDED BOOK IN THE TABLE
  const table = document.querySelector("#table");

  const newRow = document.createElement("tr");

  const titleCell = document.createElement("td"); //create the title row
  titleCell.innerText = `${myLibrary[newIndex].title}`;
  newRow.appendChild(titleCell);

  const authorCell = document.createElement("td"); //create the author row
  authorCell.innerText = `${myLibrary[newIndex].author}`;
  newRow.appendChild(authorCell);

  const pagesCell = document.createElement("td"); //create the pages row
  pagesCell.innerText = `${myLibrary[newIndex].pages}`;
  newRow.appendChild(pagesCell);

  const statusCell = document.createElement("td"); //create the status row
  statusCell.innerText = `${myLibrary[newIndex].status}`;
  newRow.appendChild(statusCell);

  /*CREATE THE REMOVE BUTTON*/
  const removeCell = document.createElement("td"); //create the remove button cell
  const removeBtn = document.createElement("input"); //create the remove button
  removeBtn.classList.add("removeBtn");
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("value", "remove");
  removeBtn.setAttribute("data-remove", `${newIndex}`); //when the user adds a new book to the library array, the index is stored in this property in HTML
  removeCell.appendChild(removeBtn);

  /*CREATE THE CHANGE STATUS BUTTON*/
  const changeStatusBtn = document.createElement("input");
  changeStatusBtn.classList.add("changeStatusBtn");
  changeStatusBtn.setAttribute("type", "button");
  changeStatusBtn.setAttribute("value", "Change Status");
  changeStatusBtn.setAttribute("data-remove", `${newIndex}`);
  removeCell.appendChild(changeStatusBtn);

  newRow.appendChild(removeCell);
  table.appendChild(newRow);
}

let newIndex = 0; //used to track the last index of the myLibrary array

//ADD A NEW BOOK TO THE LIBRARY
const addBookToLibrary = (event) => {
  event.preventDefault(); //prevents the form from submiting

  let newBook = new Book();
  newBook.title = document.querySelector("#title").value;
  newBook.author = document.querySelector("#author").value;
  newBook.pages = document.querySelector("#pages").value;
  newBook.status = document.querySelector("#status").value;

  myLibrary.push(newBook); //add the object to the library array
  newIndex = myLibrary.length - 1; //get the index of the newly added book and assign the data property in html

  document.querySelector("form").reset(); //clear the form for the next entries
  showLibrary();

  const removeBtn = document.querySelectorAll(".removeBtn");
  removeBtn.forEach((element) => element.addEventListener("click", removeBook)); //adds the remove book function

  const changeStatusBtn = document.querySelectorAll(".changeStatusBtn"); //adds the change status function
  changeStatusBtn.forEach((element) =>
    element.addEventListener("click", changeStatus)
  );
};

//REMOVE BOOK BUTTON
const removeBook = (event) => {
  const removeInput = document.querySelector(
    `[data-remove = "${event.target.dataset.remove}"]`
  );

  removeInput.parentNode.parentNode.remove();
  myLibrary.splice(event.target.dataset.remove, 1);
};

//CHANGE STATUS BUTTON
const changeStatus = (event) => {
  const changeStatusInput = document.querySelector(
    `[data-remove = "${event.target.dataset.remove}"]`
  );

  const statusElement = changeStatusInput.parentNode.parentNode.children[3];

  if (statusElement.innerHTML == "read") {
    statusElement.innerHTML = "not read";
    myLibrary[event.target.dataset.remove].status = "not read";
  } else if (statusElement.innerHTML == "not read") {
    statusElement.innerHTML = "read";
    myLibrary[event.target.dataset.remove].status = "read";
  }
};

const form = document.addEventListener("submit", addBookToLibrary); //add the function to the add book button
