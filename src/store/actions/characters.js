import { CHARACTERS } from '../types';

const loadCharacters = () => ({
  type: CHARACTERS.LOAD_DEFAULT,
});

const setPage = (page) => ({
  type: CHARACTERS.PAGE,
  page,
});

const setLength = (length) => ({
  type: CHARACTERS.LENGTH,
  length,
});

const setCharacters = (images) => ({
  type: CHARACTERS.LOAD_SUCCESS,
  images,
});

const setCharactersError = (error) => ({
  type: CHARACTERS.LOAD_FAIL,
  error,
});

const searchCharacter = (name) => ({
  type: CHARACTERS.LOAD_SEARCH,
  name,
});

export {
  loadCharacters,
  searchCharacter,
  setCharactersError,
  setCharacters,
  setPage,
  setLength,
};
