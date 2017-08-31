import { combineReducers } from 'redux';
import videoReducer from './video_reducer';
const rootReducer = combineReducers({
  videoList: videoReducer
});

export default rootReducer;
