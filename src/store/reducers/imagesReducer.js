import { CHARACTERS } from '../types';

const INITIAL_STATE = [];

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.LOAD_SUCCESS:
      return [...action.images];

    default:
      return state;
  }
};

export default imageReducer;
