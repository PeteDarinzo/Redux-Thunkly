import {
  FETCH_TITLES,
  VOTE_TITLE
} from "../Actions/actionTypes";

const INITIAL_STATE = [];

export default function titles(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TITLES:
      return (action.titles).sort((a, b) => b.votes - a.votes);
    case VOTE_TITLE:
      const newTitles = state.map(t => {
        if (t.id === action.id) {
          t = { ...t, votes: action.votes };
        }
        return t;
      });
      newTitles.sort((a, b) => b.votes - a.votes);
      return newTitles
    default:
      return state;
  }
}