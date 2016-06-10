import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './constants';

export function increment(count) {
  return {
    type: COUNTER_INCREMENT,
    count: ++count
  }
}

export function decrement(count) {
  return {
    type: COUNTER_DECREMENT,
    count: --count
  }
}
