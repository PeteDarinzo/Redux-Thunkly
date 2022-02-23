import './App.css';
import React, { useState } from "react";
import NavBar from './NavBar';
import Routes from "./Routes";

function App() {

  const [posts, setPosts] = useState([]);

  const addPost = (id, title, description, body) => {
    setPosts(() => [...posts, { id, title, description, body, comments: [] }])
  };

  const editPost = (id, title, description, body) => {
    setPosts(() => posts.map(p => {
      if (p.id === id) {
        p.title = title;
        p.description = description;
        p.body = body;
      }
      return p;
    }));
  }

  const deletePost = (id) => {
    setPosts(() => posts.filter(p => p.id !== id))
  }

  const addComment = (postId, id, text) => {
    setPosts(() => posts.map(p => {
      if (p.id === postId) {
        p.comments.push({ id, text });
      }
      return p;
    }));
  }

  const deleteComment = (postId, id) => {
    setPosts(() => posts.map(p => {
      if (p.id === postId) {
        const newComments = [...p.comments];
        p.comments = newComments.filter(c => c.id !== id);
      }
      return p;
    }));
  }


  return (
    <div className="App">
      <NavBar />
      <Routes posts={posts} addPost={addPost} editPost={editPost} deletePost={deletePost} addComment={addComment} deleteComment={deleteComment} />
    </div>
  );
}

export default App;
