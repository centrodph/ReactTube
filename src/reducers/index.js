import { combineReducers } from 'redux';
import videoReducer from './video_reducer';
import loadMoreReducer from './loadmore_reducer';
import currentsearchReducer from './searchterm_reducer';
const rootReducer = combineReducers({
  currentsearch: currentsearchReducer,
  videoList: videoReducer,
  nextPageToken: loadMoreReducer
});

export default rootReducer;
