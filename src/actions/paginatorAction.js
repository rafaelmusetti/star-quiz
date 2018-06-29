export const UPDATE_PAGINATOR = 'UPDATE_PAGINATOR';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

export function updatePaginator(pagination) {
  return {
    type: UPDATE_PAGINATOR,
    payload: {
      ...pagination,
    },
  };
}

export function updateCurrentPage(currentPage) {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  };
}
