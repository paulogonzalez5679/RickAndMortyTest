import { CHARACTERS } from '../types';

const INITIAL_STATE = 1;

const nextPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.PAGE:
      return action.page;

    default:
      return state;
  }
};

export default nextPageReducer;
