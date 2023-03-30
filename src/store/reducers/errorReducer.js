import { CHARACTERS } from '../types';

const INITIAL_STATE = null;

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.LOAD_FAIL:
      return action.error;

    case CHARACTERS.LOAD_DEFAULT:
    case CHARACTERS.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
