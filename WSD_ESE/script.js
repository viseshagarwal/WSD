var url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
//var url = "./jokes.json";
function getJoke() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.response);
      fetchJoke(data);
    }
  };
  request.open("GET", url, true);
  request.send();
}
function fetchJoke(data) {
  var joke = document.getElementById("joke");
  joke.innerHTML = ""; // Clear previous content
  joke.innerHTML = data.joke;
  //joke.innerHTML = data.category;
  //console.log(data.joke);
}

function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  if (name == "" || email == "" || comment == "") {
    alert("Please fill all the fields");
    return false;
  }

  if (name.length < 3) {
    alert("Name must be atleast 3 characters long");
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    alert("Please enter a valid email address");
    return false;
  }

  if (comment.length < 10) {
    alert("Comment must be atleast 10 characters long");
    return false;
  }

  alert("Thank you for your feedback");
}
