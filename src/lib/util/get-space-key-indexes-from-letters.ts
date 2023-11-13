import { Letter } from "../../../types";

const getSpaceKeyIndexesFromLetters = (letters: Letter[]) => {
  let spaceKeyIndexes = [];
  for (const letter of letters) {
    if (letter.key === " ") spaceKeyIndexes.push(letter.idx);
  }

  return spaceKeyIndexes;
};

export default getSpaceKeyIndexesFromLetters;
