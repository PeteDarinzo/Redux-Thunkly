import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_TITLES,
  FETCH_POST,
  VOTE_POST,
  VOTE_TITLE
} from "./actionTypes";
import axios from "axios";

const API_URL = "http://localhost:5000"

/****** FETCH TITLES ******/

export function fetchTitles() {
  return async function (dispatch) {
    const res = await axios.get(`${API_URL}/api/posts`);
    console.log(res.data);
    dispatch(gotTitles(res.data));
  }
}

export function gotTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  }
}

/****** FETCH POST ******/

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

/****** ADD POST ******/

export function addPost(title, description, body) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}/api/posts`, { title, description, body })
    dispatch(postAdded());
  }
}

function postAdded() {
  return {
    type: ADD_POST
  }
}

/****** EDIT POST ******/

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

/****** DELETE POST ******/

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

/******VOTE POST ******/

export function votePost(postId, direction) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}/api/posts/${postId}/vote/${direction}`)
    dispatch(postVoted(res.data.votes));
  }
}

function postVoted(votes) {
  return {
    type: VOTE_POST,
    votes
  }
}

/******VOTE_TITLE  ******/

export function voteTitle(postId, direction) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}/api/posts/${postId}/vote/${direction}`)
    dispatch(titleVoted(postId, res.data.votes));
  }
}

function titleVoted(id, votes) {
  return {
    type: VOTE_TITLE,
    id,
    votes
  }
}


/******ADD COMMENT ******/

export function addComment(postId, text) {
  return async function (dispatch) {
    const res = await axios.post(`${API_URL}/api/posts/${postId}/comments`, { text });
    dispatch(commentAdded(res.data));
  }
}

function commentAdded(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

/******DELETE COMMENT *******/

export function deleteComment(postId, id) {
  return async function (dispatch) {
    const res = await axios.delete(`${API_URL}/api/posts/${postId}/comments/${id}`);
    dispatch(commentDeleted(id));
  }
}

function commentDeleted(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

