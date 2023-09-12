/*
const fetchBooks = document.getElementById("fetchBooks");
const bookList = document.getElementById("bookList");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");

fetchBooks.addEventListener("click", () => {
  fetch("https://fakerapi.it/api/v1/books?_quantity=5")
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((book) => {
        const li = document.createElement("li");
        li.innerText = `${book.title} - ${book.author}`;
        bookList.appendChild(li);
      });
    });
});
*/
document.addEventListener("DOMContentLoaded", function () {
  const fetchBooksButton = document.getElementById("fetchBooks");
  const bookList = document.getElementById("bookList");

  // Function to fetch and display books
  function displayBooks() {
    // Make an AJAX request to fetch books.json (or your API URL)
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "books.json", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        // Parse the JSON response
        const books = JSON.parse(xhr.responseText);

        // Create an HTML list to display books
        const ul = document.createElement("ul");
        books.forEach((book) => {
          const li = document.createElement("li");
          li.textContent = `${book.title} by ${book.author}`;
          ul.appendChild(li);
        });

        // Clear any previous content and append the new list
        bookList.innerHTML = "";
        bookList.appendChild(ul);
      } else {
        // Handle errors
        console.error("Error fetching data:", xhr.status, xhr.statusText);
      }
    };
    /*
    xhr.onerror = function () {
      console.error("Network error occurred");
    };
*/
    // Send the AJAX request
    xhr.send();
  }

  // Add a click event listener to the "Fetch Books" button
  fetchBooksButton.addEventListener("click", displayBooks);
});
