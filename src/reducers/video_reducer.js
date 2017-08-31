import { SEARCH_VIDEOS, LOADMORE_VIDEOS } from '../actions';
export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_VIDEOS:
      return action.payload.data.items;
    case LOADMORE_VIDEOS:
      return [...state, ...action.payload.data.items];
    default:
  }
  return state;
}
