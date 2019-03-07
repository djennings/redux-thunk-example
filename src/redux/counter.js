import * as Count from '../constants';
import { createSelector } from 'reselect';

/* 
   ********************************************************************
   ********************************************************************
   ***                          reducers                            ***
   ********************************************************************
   ********************************************************************
*/
// reducer handlers
const decrementCount  = (state, action) => {
  return state - action.payload;
}

const incrementCount = (state, action) => {
  return state + action.payload;
}

// lookup table
const lookup = {
  [Count.increment]: incrementCount,
  [Count.decrement]: decrementCount
};

// reducer lookup 
export const counterReducer = (state = 0, action) => lookup[action.type] ? lookup[action.type](state, action) : state;

/* 
   ********************************************************************
   ********************************************************************
   ***                          selectors                           ***
   ********************************************************************
   ********************************************************************
*/
const getCountValue = state => state.counter;

export const getCurrentCount = createSelector(
  [getCountValue],
  count => {
    return count;
  }
);

/* 
   ********************************************************************
   ********************************************************************
   ***                          action creators                     ***
   ********************************************************************
   ********************************************************************
*/
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
