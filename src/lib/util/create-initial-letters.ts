import { KEY_TYPE, Letter } from "../../../types";

const createInitialLetters = (wordList: string[]): Letter[] => {
   const letters = wordList
      .join(" ")
      .split("")
      .map((letter, idx) => ({
         idx,
         key: letter,
         state: KEY_TYPE.NULL,
      }));

   return letters;
};

export default createInitialLetters;
