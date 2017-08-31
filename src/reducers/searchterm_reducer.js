import { NEWSEARCH_TERM } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case NEWSEARCH_TERM:
      return action.payload;
    default:
  }
  return state;
}
