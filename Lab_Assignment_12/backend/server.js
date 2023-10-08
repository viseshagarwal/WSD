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
// ... existing code

app.put("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const updatedContent = req.body.content;
  fs.writeFile(`${postsDir}${postId}.txt`, updatedContent, (err) => {
    if (err) throw err;
    res.json({ message: "Post updated successfully", postId });
  });
});

app.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  fs.unlink(`${postsDir}${postId}.txt`, (err) => {
    if (err) throw err;
    res.json({ message: "Post deleted successfully", postId });
  });
});

// ... rest of the code

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
