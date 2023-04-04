import { CHARACTERS } from '../types';

const INITIAL_STATE = false;

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS.LOAD_DEFAULT:
    case CHARACTERS.LOAD_SEARCH:
      return true;

    case CHARACTERS.LOAD_SUCCESS:
    case CHARACTERS.LOAD_FAIL:
      return false;

    default:
      return false;
  }
};

export default loadingReducer;
