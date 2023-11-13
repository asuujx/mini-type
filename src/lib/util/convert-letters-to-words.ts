import { Letter, Words } from "../../../types";

const convertLettersToWords = (letters: Letter[]) => {
  let words: Words = [];
  let word: (Letter & { idx: number })[] = [];

  letters.forEach((letter, idx) => {
    if (letter.key !== " ") {
      word.push({ ...letter, idx });
    } else {
      words.push(word);
      word = [];
    }
  });

  return words;
};

export default convertLettersToWords;
