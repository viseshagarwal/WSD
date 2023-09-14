/*
function fetchAndDisplayBooks() {
  const bookList = document.getElementById("bookList");
  const xhr = new XMLHttpRequest();
  const url = "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list";
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const books = JSON.parse(xhr.responseText);

      displayBooks(books);
    } else {
      bookList.innerHTML = "Failed to fetch books.";
    }
  };
  xhr.send();
}

function displayBooks(books) {
  const bookList = document.getElementById("bookList");

  bookList.innerHTML = "";
  const ul = document.createElement("ul");

  books.forEach(function (book) {
    const li = document.createElement("li");
    li.textContent = book.title;
    ul.appendChild(li);
  });

  bookList.appendChild(ul);
}
document
  .getElementById("fetchBooks")
  .addEventListener("click", fetchAndDisplayBooks);
*/
document.addEventListener("DOMContentLoaded", function () {
  const fetchBooksButton = document.getElementById("fetchBooks");
  const bookListDiv = document.getElementById("bookList");

  fetchBooksButton.addEventListener("click", function () {
      // Create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();

      // Define the URL for the JSON data (replace with your API URL)
      const apiUrl = "https://example.com/api/books.json";

      // Configure the AJAX request
      xhr.open("GET", apiUrl, true);

      // Set the response type to JSON
      xhr.responseType = "json";

      // Define what happens when the request is successful
      xhr.onload = function () {
          if (xhr.status === 200) {
              const books = xhr.response;
              displayBooks(books);
          } else {
              // Handle the error
              console.error("Error fetching books:", xhr.status);
          }
      };

      // Handle network errors
      xhr.onerror = function () {
          console.error("Network error while fetching books");
      };

      // Send the AJAX request
      xhr.send();
  });

  function displayBooks(books) {
      // Clear the existing book list
      bookListDiv.innerHTML = "";

      // Create an unordered list to display the books
      const ul = document.createElement("ul");

      // Iterate through the list of books and create list items
      books.forEach(function (book) {
          const li = document.createElement("li");
          li.textContent = `${book.title} by ${book.author}`;
          ul.appendChild(li);
      });

      // Append the list to the bookListDiv
      bookListDiv.appendChild(ul);
  }
});
