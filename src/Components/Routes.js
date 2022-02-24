import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import Home from "./Home";
import PostDetail from "./PostDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewPostForm />
      </Route>
      <Route path="/:postId">
        <PostDetail />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;