import * as types from '../types';

const initialState = 0;

const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;