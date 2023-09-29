document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const notFoundMessage = document.getElementById("notFoundMessage");

  function fetchProducts() {
    const xhr = new XMLHttpRequest();
    const url =
      "https://raw.githubusercontent.com/viseshagarwal/WSD/main/Lab_Assignment_8/items.json";

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const products = JSON.parse(xhr.responseText);
          const keyword = searchInput.value.toLowerCase().trim();
          const filteredProducts = products.filter(
            (product) =>
              product.name.toLowerCase().includes(keyword) ||
              product.description.toLowerCase().includes(keyword)
          );

          const sortBy = sortSelect.value;
          filteredProducts.sort((a, b) => {
            if (sortBy === "name") {
              return a.name.localeCompare(b.name);
            } else if (sortBy === "price") {
              return a.price - b.price;
            }
          });

          if (filteredProducts.length === 0) {
            productList.innerHTML = "";
            notFoundMessage.textContent = "No products found.";
            return;
          }

          notFoundMessage.textContent = "";
          productList.innerHTML = "";

          filteredProducts.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productName = document.createElement("h2");
            productName.textContent = product.name;

            const productDescription = document.createElement("p");
            productDescription.textContent = product.description;

            const productPrice = document.createElement("p");
            productPrice.textContent = `Price: ₹${product.price.toFixed(2)}`;

            const productImage = document.createElement("img");
            productImage.src = product.image_url;
            productImage.alt = product.name;

            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productDescription);
            productDiv.appendChild(productPrice);

            productList.appendChild(productDiv);
          });
        } else {
          console.error("Error fetching data. Status:", xhr.status);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }

  fetchProducts();

  searchInput.addEventListener("input", fetchProducts);
  sortSelect.addEventListener("change", fetchProducts);
});
