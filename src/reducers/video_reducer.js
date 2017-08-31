import { SEARCH_VIDEOS } from '../actions';
console.log(SEARCH_VIDEOS);
export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_VIDEOS:
      console.log(action.payload.data);
      return action.payload.data.items;
      break;
  }
  return state;
}
