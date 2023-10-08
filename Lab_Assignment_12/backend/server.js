const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line
const fs = require("fs");
const app = express();

app.use(cors()); // Allow all CORS requests
app.use(bodyParser.json());

const postsDir = "./posts/";

app.get("/posts", (req, res) => {
  fs.readdir(postsDir, (err, files) => {
    if (err) throw err;
    const posts = files.map((file) => {
      const post = fs.readFileSync(`${postsDir}${file}`, "utf-8");
      return { id: file.split(".")[0], content: post };
    });
    res.json(posts);
  });
});

app.post("/posts", (req, res) => {
  const postId = Date.now().toString();
  const postContent = req.body.content;
  fs.writeFile(`${postsDir}${postId}.txt`, postContent, (err) => {
    if (err) throw err;
    res.status(201).json({ message: "Post created successfully", postId });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
