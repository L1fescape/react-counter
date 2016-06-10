import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './constants';

export default function reducer(state = {
  count: 0
}, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return Object.assign({}, state, {
        count: action.count
      });
    case COUNTER_DECREMENT:
      return Object.assign({}, state, {
        count: action.count
      });
    default:
      return state;
  }
}
