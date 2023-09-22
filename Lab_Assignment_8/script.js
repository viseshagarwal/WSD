/*
Write JavaScript code to make an AJAX request to fetch the products.json file from the remote server.
Data Display:
Create a function to parse the JSON data once it's retrieved successfully.
Dynamically generate HTML elements (e.g., divs, images, and paragraphs) for each product in the catalog.
Display the product information on the webpage, including product names, descriptions, prices, and images.
*/

function callAPI() {
  // let httpRequest;
  const httpRequest = new XMLHttpRequest();
  const url = "https://dummyjson.com/products";
  makeRequest(url);

  function makeRequest(url) {
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", url, true);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const response = JSON.parse(httpRequest.responseText);
        console.log(response);
        response.products.map(
          (product) =>
            (document.getElementById("display").innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card ml-4" style="width: 18rem;">
              <img src="${product.images[0]}" class="card-img-top" alt="...">
              <div class="card-body">
                <h3>${product.title}</h3>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text"> $ ${product.price}</p>
                  <a href="${product.link}">book link</a>
      </div>
  </div>
    </div>`)
        );
      } else {
        alert("There was a problem with the request.");
      }
    }
  }

  console.log("hello", httpRequest.responseText);
}
window.onload = callAPI();

document.getElementById("searchbox").onkeypress = function () {
  search();
};

// Seach bar
function search() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByTagName("h3");
  console.log(x);
  console.log(input);
}
