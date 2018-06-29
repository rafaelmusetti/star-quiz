export const charactersNormalize = (characters) => {
  if (!characters) {
    return {};
  }

  const ids = [];
  const content = {};
  characters.forEach((character) => {
    content[character.url] = {
      birthYear: character.birth_year,
      eyeColor: character.eye_color,
      gender: character.gender,
      hairColor: character.hair_color,
      height: character.height,
      id: character.url,
      imageUrl: character.imageUrl,
      name: character.name,
      skinColor: character.skin_color,
    }
    ids.push(character.url);
  });

  return {
    ids,
    content,
  };
}
