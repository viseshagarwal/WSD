import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleCreatePost = () => {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newPostContent }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post created successfully:", data);
        setNewPostContent("");
        fetchPosts();
      })
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div className="App">
      {/* <textarea
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
        placeholder="Enter your blog post here"
      /> 
      <button onClick={handleCreatePost}>Create Post</button>*/}

      <div className="container">
        <h1 className="mt-5 mb-4">Blog Application</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Enter your blog post here"
          />
        </div>
      </div>
      <button className="btn btn-primary mb-3" onClick={handleCreatePost}>
        Create Post
      </button>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <strong>{post.id}</strong>
            <br />
            {post.content}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
{
  /* 
import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleCreatePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        content: newPostContent,
      })
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPostContent("");
      })
      .catch((error) => console.error("Error creating post:", error));
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Blog Application</h1>
      <div className="form-group">
        <textarea
          className="form-control"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Enter your blog post here"
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleCreatePost}>
        Create Post
      </button>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; */
}
