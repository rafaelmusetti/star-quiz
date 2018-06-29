import {
  UPDATE_PAGINATOR,
  UPDATE_CURRENT_PAGE,
} from '../actions/paginatorAction';

const INITIAL_STATE = {
  paginator: {
    pages: {},
    currentPage: 1,
    totalOfItems: 1,
  },
};

const updatePaginator = (state, action) => {
  return {
    ...state,
    pages: {
      ...state.pages,
      [action.payload.currentPage]:
      state.pages[action.payload.currentPage] ?
      [...new Set([...state.pages[action.payload.currentPage], ...action.payload.characterIds])] :
        [...action.payload.characterIds],
    },
    totalOfItems: action.payload.totalOfItems,
   };
}

export default function paginator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        paginator: {
          ...state.paginator,
          currentPage: action.payload.currentPage,
        },
      };
    case UPDATE_PAGINATOR:
      return {
        ...state,
        paginator: updatePaginator({...state.paginator}, action),
      };
    default:
      return state;
  }
}
