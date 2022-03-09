import {
  FETCH_TITLES,
  VOTE_TITLE,
  ADD_POST,
  DELETE_POST,
  EDIT_POST
} from "../Actions/actionTypes";

function sortByVote(posts) {
  return posts.sort((a, b,) => b.votes - a.votes);
}

function makeTitleFromPost({ id, title, description, votes }) {
  return { id, title, description, votes };
}

const INITIAL_STATE = [];

export default function titles(state = INITIAL_STATE, action) {
  switch (action.type) {

    case FETCH_TITLES:
      return sortByVote([...action.titles]);

    case ADD_POST:
      return sortByVote([...state, makeTitleFromPost(action.post)]);

    case EDIT_POST:
      return state.map(title => title.id === action.post.id ? makeTitleFromPost(action.post) : title);

    case DELETE_POST:
      const postId = parseInt(action.id);
      return state.filter(title => title.id !== postId);

    case VOTE_TITLE:
      const newTitles = state.map(t => {
        if (t.id === action.id) {
          t = { ...t, votes: action.votes };
        }
        return t;
      });
      newTitles.sort((a, b) => b.votes - a.votes);
      return newTitles

    case ADD_POST:




    default:
      return state;
  }
}