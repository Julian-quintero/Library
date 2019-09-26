var myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

let tittle = document.getElementById("title");

tittle.addEventListener("keyup", () => {
  if (title.value.length > 20) {
    tittle.value = tittle.value.slice(0, 20);
  }
})

window.onload = () => {

  document.getElementById("form").style.display = "none";
  fillLibrary();
  myLibrary.forEach((book, index) => render(book, index));

}

function showForm() {
  document.getElementById("form").style.display = "block";
  document.getElementById("showForm").style.display = "none";

}

function showElements(form) {

  document.getElementById("showForm").style.display = "block";
  document.getElementById("form").style.display = "none";

  reset();

  let book = new Book(form.title.value, form.author.value, form.pages.value, form.checkbox.checked);

  myLibrary.push(book);

  myLibrary.forEach((book, index) => render(book, index));

  form.title.value = "";
  form.pages.value = "";
  form.author.value = "";

}

function render(params, index) {

  var container = document.querySelector(".items");

  let div = document.createElement("div");
  let header = document.createElement("header");
  let button = document.createElement("button");

  div.className = "card";
  div.dataset.id = index;

  header.className = "card-title";
  header.innerHTML = `Title: ${params.title}`;

  container.appendChild(div).appendChild(header);

  div = document.createElement("div");

  div.className = "card-description";
  div.innerHTML = `Author: ${params.author}`;

  button.type = "button";
  button.innerHTML = "Delete";

  header.parentElement.appendChild(div);

  div = document.createElement("div");
  div.className = "card-pages";
  div.innerHTML = `Pages: ${params.pages}`;

  header.parentElement.appendChild(div);
  header.parentElement.appendChild(button);

  button.setAttribute("onclick", "deleteBook(`${parentElement.dataset.id}`)");

  button = document.createElement("button");
  button.type = "button";

  button.id = index;
  button.className = "readButton";

  header.parentElement.appendChild(button);
  button.innerHTML = `Already read: ${myLibrary[index].read}`;

  button.setAttribute("onclick", "readStatus(`${parentElement.dataset.id}`)");

}

function deleteBook(form) {
  myLibrary.splice(form, 1);
  reset();
  myLibrary.forEach((book, index) => render(book, index));
}

function readStatus(params) {
  let buttonSelector = document.getElementById(params);

  if (myLibrary[params].read == true) {
    myLibrary[params].read = false;
    buttonSelector.innerHTML = `Already read: ${myLibrary[params].read}`;
    return;
  } else
    myLibrary[params].read = true;
  buttonSelector.innerHTML = `Already read: ${myLibrary[params].read}`;
}

function fillLibrary() {
  const greatGatsby = new Book("The great gatsby", "F.Scott", "218", true);
  const call = new Book("The call of cthulhu", "H.P. Lovecraft", "31", true);
  myLibrary.push(greatGatsby,call);
}


function reset() {
  let element = document.getElementById("items");
  let z = document.createElement("div");
  element.parentNode.removeChild(element);
  container = document.querySelector(".container");
  z.className = "items";
  z.setAttribute("id", "items");
  container.appendChild(z)
}