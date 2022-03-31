// async function loadBooks() {
//   const response = await fetch("books.json");
//   //le transforme en Json
//   const books = await response.json();
//   console.log(books);
// }

// loadBooks();

//--------------------------------------------------------------------------------

const titre = document.getElementById("titre");

fetch("books.json")
  .then((res) => res.json())
  .then((data) => titre.html("<p><b>titre</b> :" + data[0].title + "</p>"));
