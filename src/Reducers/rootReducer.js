import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_TITLES,
  FETCH_POST
} from "../Actions/actionTypes";

const INTITIAL_STATE = { titles: {}, post: {} };

const rootReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TITLES:
      return { ...state, titles: action.titles };
    case FETCH_POST:
      return { ...state, post: action.post };
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
      return state;
    case DELETE_POST:
      return { ...state, post: {} };
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