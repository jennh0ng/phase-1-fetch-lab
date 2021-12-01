// fetch("URL")
// calling fetch and passing a URL to a data source as the argument. This will return an object that represents what the data source sent back
    // .then(function (response) {
// call "then()" on the object that comes back from "fetch()" and capture the object into the response parameter so it can be passed as an argument in cb function
    //  return response.json();
    // })
    // .then(function (json) {
// use the data inside of `json` to do DOM manipulation
    // });
// the "then()" method receives the object returned from the first call to "then()" - pir "JSON-ified" object
// pass it into a second cb function
// "json" or "response" are often-used parameters for the cb function

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const response = fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(json => renderBooks(json));
  return response;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
