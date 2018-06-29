import GoogleImages from 'google-images'
import { charactersNormalize } from '../normalizers/characters';
import { paginatorNormalize } from '../normalizers/paginator';

import { updatePaginator } from './paginatorAction';

export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';

const client = new GoogleImages('009339406714867051155:zu9ds7q-enm', 'AIzaSyDehsrD0hT1W8m6kjip_8iqmLha0OvbiF0');

export function updateCharacters(characters) {
  return {
    type: UPDATE_CHARACTERS,
    payload: {
      data: characters,
    },
  };
}

export function getImageByCharacterName(name) {
  return client.search(name);
}

export function fetchCharactersByPage() {
  return async (dispatch, getState) => {
    try {
        const currentPage = getState().paginatorReducer.paginator.currentPage;
        const response = await fetch(`https://swapi.co/api/people?format=json&page=${currentPage}`);
        const json = await response.json();
        const result = json.results.map(async (character, index) => {
          const image = await getImageByCharacterName(character.name);
          const res = {
            ...character,
            imageUrl: image[0].url,
          }
          return res;
        });
        Promise.all(result).then((results) => {
          dispatch(updateCharacters(charactersNormalize(results)));
          dispatch(updatePaginator(paginatorNormalize(currentPage, results)));
        })
        .catch(() => {
          dispatch(updateCharacters(charactersNormalize(json.results)));
          dispatch(updatePaginator(paginatorNormalize(currentPage, json.results)));
        });
    } catch (error) {
      console.log('error', error);
    }
  };
}
