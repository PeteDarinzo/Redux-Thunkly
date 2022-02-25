import {
  FETCH_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../Actions/actionTypes";

const INTITIAL_STATE = {};

export default function post(state = INTITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      return action.post;
    case ADD_POST:
      return state;
    case EDIT_POST:
      return state;
    case DELETE_POST:
      return {};
    case VOTE_POST:
      return { ...state, votes: action.votes }
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, { id: action.comment.id, text: action.comment.text }] }
    case DELETE_COMMENT:
      const newComments = state.comments.filter(c => c.id !== action.id);
      return { ...state, comments: [...newComments] }
    default:
      return state;
  }
}