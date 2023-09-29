function fetchAndDisplayBooks() {
  const bookList = document.getElementById("bookList");
  const xhr = new XMLHttpRequest();
  const url = "books.json";
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
