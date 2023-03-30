import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import pageReducer from './pageReducer';
import searchReducer from './searchReducer';
import lengthReducer from './lengthReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  images: imagesReducer,
  isLoading: loadingReducer,
  page: pageReducer,
  searchName: searchReducer,
  pages: lengthReducer,
});

export default rootReducer;
