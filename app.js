var myLibrary = [];

var p;


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}


//let book = new Book(title,author,genre,read);

//myLibrary.push(book);







function showElements(form) {

  reset();

  console.log(myLibrary);


  let book = new Book(form.author.value, form.title.value, form.pages.value, form.checkbox.checked);

  myLibrary.push(book);


  myLibrary.forEach((book, index) => render(book, index));

}

function render(params, index) {

  //console.log(params);
  //console.log(index);

  //console.log(params);






  var div_usuarios = document.querySelector(".items");


  var a = document.createElement("div");
  var b = document.createElement("header");



  a.className = "card"
  b.className = "card-title"




  b.innerHTML = params.title;


  var c = document.createElement("div");


  c.className = "card-description";

  c.innerHTML = params.author;


  a.dataset.id = index;

  p = a.dataset.id;



  var button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "delete";








  div_usuarios.appendChild(a).appendChild(b);
  b.parentElement.appendChild(c)
  b.parentElement.appendChild(button);

  button.setAttribute("onclick", "deleteBook(`${parentElement.dataset.id}`)");


  console.log();





}

function deleteBook(form) {
  console.log(form);

  myLibrary.splice(form,1);

  reset();
  myLibrary.forEach((book, index) => render(book, index));






  //   var div_usuarioss = document.querySelector(".card");

  // if (div_usuarioss.dataset.id==form) {
  //   div_usuarioss.remove();


  //   console.log(myLibrary);


}


function reset() {
  var element = document.getElementById("items");
  element.parentNode.removeChild(element);

  div_usuarios = document.querySelector(".container");
  var z = document.createElement("div");
  z.className = "items";
  z.setAttribute("id", "items");
  div_usuarios.appendChild(z)

}