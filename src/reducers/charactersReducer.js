import {
  UPDATE_CHARACTERS,
} from '../actions/charactersAction';

const INITIAL_STATE = {
  ids: [],
  content: {},
};

export default function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CHARACTERS:
      const data = action.payload.data;
      return {
        ids: [...new Set([...state.ids, ...data.ids])],
        content: Object.assign(state.content, data.content),
      };
    default:
      return state;
  }
}
