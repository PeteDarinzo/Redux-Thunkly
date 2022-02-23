import './App.css';
import React, { useState } from "react";
import NavBar from './NavBar';
import Routes from "./Routes";

function App() {

  const [posts, setPosts] = useState([]);

  const addPost = (id, title, description, body) => {
    setPosts(() => [...posts, { id, title, description, body }])
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

  return (
    <div className="App">
      <NavBar />
      <Routes posts={posts} addPost={addPost} editPost={editPost} deletePost={deletePost} />
    </div>
  );
}

export default App;
