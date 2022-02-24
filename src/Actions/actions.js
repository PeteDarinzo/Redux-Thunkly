import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

export function addPost(id, title, description, body) {
  return {
    type: ADD_POST,
    id,
    title,
    description,
    body
  };
}

export function editPost(id, title, description, body) {
  return {
    type: EDIT_POST,
    id,
    title,
    description,
    body
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  }
}

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