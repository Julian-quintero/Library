var myLibrary = [];




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

  var element = document.getElementById("items");
  element.parentNode.removeChild(element);

  div_usuarios = document.querySelector(".container");
  var z = document.createElement("div");
  z.className = "items";
  z.setAttribute("id","items");
  div_usuarios.appendChild(z)
  



  

  let book = new Book(form.author.value, form.title.value, form.pages.value, form.checkbox.checked);

  myLibrary.push(book);


  myLibrary.forEach((book) => render(book));

  function render(params) {

    console.log(params);

    

    var div_usuarios = document.querySelector(".items");

    var a = document.createElement("div");
    var b = document.createElement("header");
  
    a.className = "card"
    b.className = "card-title"
  
  
    b.innerHTML = params.title;
  
  
    div_usuarios.appendChild(a).appendChild(b);
    
    
  }

 





  //console.log(myLibrary);

  //console.log(form.name.value);





}

