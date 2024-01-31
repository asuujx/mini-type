import { Data } from "../../../types";

const generateRandomWordlist = (data: Data, numOfWords: number) => {
   const { words } = data;
   const numberOfWords = Math.min(numOfWords, words.length);

   const shuffledWords = words.slice();

   shuffledWords.sort(() => Math.random() - 0.5);

   return shuffledWords.slice(0, numberOfWords);
};

export default generateRandomWordlist;
