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
  const handleEditPost = (postId) => {
    const updatedContent = prompt("Enter updated content:", "");
    if (updatedContent !== null) {
      fetch(`http://localhost:3001/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: updatedContent }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Post updated successfully:", data);
          fetchPosts();
        })
        .catch((error) => console.error("Error updating post:", error));
    }
  };

  const handleDeletePost = (postId) => {
    fetch(`http://localhost:3001/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post deleted successfully:", data);
        fetchPosts();
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5 mb-4">Blog Application</h1>
        <br />
        <div className="form-group">
          <textarea
            className="form-control"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Enter your blog post here"
          />
        </div>
        <br />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleCreatePost}>
        Create Post
      </button>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post card p-3 my-3">
            <strong>Post ID: {post.id}</strong>
            <p className="mt-2">{post.content}</p>

            <div className="d-flex justify-content-center">
              <button
                onClick={() => handleEditPost(post.id)}
                className="btn btn-warning mr-2 mr-2"
                style={{ width: "80px" }}
              >
                Edit
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => handleDeletePost(post.id)}
                className="btn btn-danger"
                style={{ width: "80px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
