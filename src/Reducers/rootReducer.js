import { AccordionBody } from "reactstrap";
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
  const post = state.post;
  switch (action.type) {
    case FETCH_TITLES:
      return { ...state, titles: action.titles };
    case FETCH_POST:
      return { ...state, post: action.post };
    case ADD_POST:
      return state;
    case EDIT_POST:
      return state;
    case DELETE_POST:
      return { ...state, post: {} };
    case ADD_COMMENT:
      return { ...state, post: { ...post, comments: [...post.comments, { id: action.comment.id, text: action.comment.text }] } }
    case DELETE_COMMENT:
      const newComments = post.comments.filter(c => c.id !== action.id);
      return { ...state, post: { ...post, comments: [...newComments] } }
    default:
      return state;
  }
}

export default rootReducer;