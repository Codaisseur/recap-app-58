export const getCharacters = (reduxState) => reduxState.characters.list;

export const getCharactersOlderThan = (age) => (reduxState) => {
  const list = reduxState.characters.list;
  const olderThan = list.filter((c) => c.age > age);
  return olderThan;
};

export const getLoading = (reduxState) => reduxState.characters.loading;
