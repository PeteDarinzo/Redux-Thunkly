import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Home from "./Home";
import PostDetail from "./PostDetail";

const Routes = ({ posts, addPost, editPost, deletePost, addComment, deleteComment }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home posts={posts} />
      </Route>
      <Route exact path="/new">
        <NewPostForm addPost={addPost} />
      </Route>
      <Route path="/:postId">
        <PostDetail
          posts={posts}
          editPost={editPost}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;