import { select, takeEvery, call, put } from 'redux-saga/effects';

import { CHARACTERS } from '../types';
import { fetchAllCharacters, fetchSingleCharacter } from '../../apis/fetchData';

import { setCharacters, setCharactersError, setLength } from '../actions';

const getPage = (state) => state.page;
const getSearch = (state) => state.searchName;

function* handleCharactersLoad() {
  try {
    const page = yield select(getPage);

    // Make call to API handle the request
    const images = yield call(fetchAllCharacters, page);

    // Set length before get the images
    yield put(setLength(images.info.pages));
    // Extract only the images
    yield put(setCharacters(images.results));
  } catch (err) {
    yield put(setCharactersError(err.toString()));
  }
}

function* handleSearchCharacters() {
  try {
    const name = yield select(getSearch);
    const page = yield select(getPage);

    // Make call to API handle the request
    const images = yield call(fetchSingleCharacter, name, page);

    // Set length before get the images
    yield put(setLength(images.info.pages));
    // Extract only the images
    yield put(setCharacters(images.results));
  } catch (err) {
    yield put(setCharactersError(err.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(CHARACTERS.LOAD_DEFAULT, handleCharactersLoad);
  yield takeEvery(CHARACTERS.LOAD_SEARCH, handleSearchCharacters);
}
