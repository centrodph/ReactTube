import { SELECTED_VIDEO } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SELECTED_VIDEO:
      return action.payload;
    default:
      return state;
  }
}
