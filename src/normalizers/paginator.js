export const paginatorNormalize = (pageNumber, paginator) => {
  if (!paginator) {
    return {};
  }

  const ids = [];
  paginator.forEach((character) => {
    ids.push(character.url);
  });

  return {
    characterIds: ids,
    currentPage: pageNumber,
    totalOfItems: paginator.length,
  };
}
