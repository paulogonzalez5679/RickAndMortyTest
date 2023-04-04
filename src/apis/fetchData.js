const fetchAllCharacters = async (page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);

  return data;
};

const fetchSingleCharacter = async (name, page) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`,
  );
  const data = await response.json();

  if (response.status >= 400) throw new Error(data.errors);
  return data;
};

export { fetchAllCharacters, fetchSingleCharacter };
