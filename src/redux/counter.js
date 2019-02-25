import * as Count from '../constants';
import { createSelector } from 'reselect';

// reducers
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case Count.increment:
      return state + action.payload;
    case Count.decrement:
      return state - action.payload;
    default:
      return state;
  }
}

// selectors
const getCountValue = state => state.counter;

export const getCurrentCount = createSelector(
  [getCountValue],
  count => {
    return count;
  }
);

// action creators
export const increment = payload => {
  return {
    type: Count.increment,
    payload
  };
};

export const decrement = payload => {
  return {
    type: Count.decrement,
    payload
  };
};

export const delay = (payload) => {
  return dispatch => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(increment(payload));
    }, 2000);
  };
};

export const showLoading = () => {
  return {
    type: Count.loading
  };
};
