import { CHARACTERS } from '../types';

const INITIAL_STATE = '';

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.LOAD_SEARCH:
      return action.name;

    default:
      return state;
  }
};

export default searchReducer;
