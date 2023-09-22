function callAPI() {
  // let httpRequest;
  const httpRequest = new XMLHttpRequest();
  const url = "https://dummyjson.com/products";
  makeRequest(url);

  function makeRequest(url) {
    httpRequest.onreadystatechange = writeContents;
    httpRequest.open("GET", url, true);
    httpRequest.send();
  }

  function writeContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const response = JSON.parse(httpRequest.responseText);
        //console.log(response);
        response.products.map(
          (product) =>
            (document.getElementById("display").innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card ml-4" style="width: 18rem;">
              <img src="${product.thumbnail}"  width="286px" height="280px" >
              <div class="card-body">
                <h3 class="newWorld">${product.title}</h3>
                <h5>${product.brand}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text"> $ ${product.price}</p>
                  <p class="card-text">Rating : ${product.rating}</p>
                  
      </div>
  </div>
    </div>`)
        );
        // fucntion to search the product
      } else {
        alert("There was a problem with the request.");
      }
    }
  }

  //console.log("hello", httpRequest.responseText);
}
window.onload = callAPI();

// Search function using H3 tag
function searchProduct() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("newWorld");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentElement.parentElement.parentElement.style.display = "none";
    } else {
      x[i].parentElement.parentElement.parentElement.style.display =
        "inline-block";
    }
  }
}
