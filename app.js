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

tittle.addEventListener("keyup",()=>{
  if (title.value.length > 20) {
    tittle.value = tittle.value.slice(0,20);
    
  }
})





function showElements(form) {

  reset();

  let book = new Book(form.title.value,form.author.value, form.pages.value, form.checkbox.checked);

  myLibrary.push(book);

  myLibrary.forEach((book, index) => render(book, index));

  form.title.value="";
  form.pages.value="";
  form.author.value="";

  console.log(myLibrary);
  

}

function render(params, index) {


  var container = document.querySelector(".items");

  let div = document.createElement("div");
  let header = document.createElement("header");
  let c = document.createElement("div");
  let button = document.createElement("button");


  div.className = "card";
  header.className = "card-title";
  header.innerHTML = params.title;
  c.className = "card-description";
  c.innerHTML = params.author;

  div.dataset.id = index;

 

  button.type = "button";
  button.innerHTML = "delete";


  container.appendChild(div).appendChild(header);
  header.parentElement.appendChild(c);
  c = document.createElement("div");
  c.className = "card-pages";
  c.innerHTML = params.pages;
  header.parentElement.appendChild(c);


  header.parentElement.appendChild(button);

  button.setAttribute("onclick", "deleteBook(`${parentElement.dataset.id}`)");

  button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "Read: yes";
  header.parentElement.appendChild(button);

  button.setAttribute("onclick", "readStatus(`${parentElement.dataset.id}`)");




}

function deleteBook(form) {

  myLibrary.splice(form,1);
  reset();
  myLibrary.forEach((book, index) => render(book, index));

}

function readStatus(params) {

  
  

  if (  myLibrary[params].read==true) {
    myLibrary[params].read=false;    
  }else
  myLibrary[params].read=true;  

 
  
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