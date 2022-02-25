import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_TITLES,
  FETCH_POST
} from "./actionTypes";
import axios from "axios";

const API_URL = "http://localhost:5000"

/****** FETCH TITLES */
export function fetchTitles() {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}/api/posts`);
    dispatch(gotTitles(res.data));
  }
}

export function gotTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  }
}

/****** FETCH POST */
export function fetchPost(id) {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}/api/posts/${id}`);
    dispatch(gotPost(res.data));
  }
}

export function gotPost(post) {
  return {
    type: FETCH_POST,
    post
  }
}

/****** EDIT POST */
export function editPost(id, title, description, body) {
  return async function (dispatch) {
    const res = await axios.put(`${API_URL}/api/posts/${id}`, { title, body, description })
    dispatch(postEdited());
  }
}

function postEdited() {
  return {
    type: EDIT_POST
  }
}

/****** DELETE POST */
export function deletePost(id) {
  return async function (dispatch) {
    const res = await axios.delete(`${API_URL}/api/posts/${id}`);
    dispatch(postDeleted());
  }
}

export function postDeleted() {
  return {
    type: DELETE_POST
  }
}

export function addPost(id, title, description, body) {
  return {
    type: ADD_POST,
    id,
    title,
    description,
    body
  };
}



// export function deletePost(id) {
//   return {
//     type: DELETE_POST,
//     id
//   }
// }

export function addComment(postId, id, text) {
  return {
    type: ADD_COMMENT,
    postId,
    id,
    text
  }
}

export function deleteComment(postId, id) {
  return {
    type: DELETE_COMMENT,
    postId,
    id
  }
}