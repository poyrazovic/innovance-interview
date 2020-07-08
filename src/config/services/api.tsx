export const POKEMON_URL = '/pokemon';

interface Params {
  name?: string
}

export const POKEMON_SEARCH = (name : Params) => {
  return {
    THIS: POKEMON_URL,
    HABITAT: `${POKEMON_URL}-habitat`,
    SEARCH: `${POKEMON_URL}/${name}`
  };
};
