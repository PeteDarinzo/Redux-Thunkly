import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../Actions/actionTypes";

const INTITIAL_STATE = { posts: {} };

const rootReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
      return ({
        posts: {
          ...state.posts, [action.id]: {
            title: action.title,
            description: action.description,
            body: action.body,
            comments: {}
          }
        }
      });
    case EDIT_POST:
      return {
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            title: action.title,
            description: action.description,
            body: action.body,
          }
        }
      }
    case DELETE_POST:
      const updatedPosts = { ...state.posts };
      delete updatedPosts[action.id];
      return { posts: updatedPosts };
    case ADD_COMMENT:
      const addCommentPost = state.posts[action.postId];
      const addedComments = {
        ...state.posts, [action.postId]: { ...addCommentPost, comments: { ...addCommentPost.comments, [action.id]: action.text } }
      }
      return { posts: addedComments }
    case DELETE_COMMENT:
      const deleteCommentPost = state.posts[action.postId];
      delete deleteCommentPost.comments[action.id];
      return { posts: { ...state.posts, [action.postId]: { ...deleteCommentPost } } }
    default:
      return state;
  }
}

export default rootReducer;