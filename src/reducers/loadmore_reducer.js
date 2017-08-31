import { SEARCH_VIDEOS, LOADMORE_VIDEOS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SEARCH_VIDEOS:
    case LOADMORE_VIDEOS:
      return action.payload.data.nextPageToken;
      break;
  }
  return state;
}
