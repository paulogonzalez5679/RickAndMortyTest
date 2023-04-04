import { CHARACTERS } from '../types';

const INITIAL_STATE = null;

const lengthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.LENGTH:
      return action.length;

    default:
      return state;
  }
};

export default lengthReducer;
