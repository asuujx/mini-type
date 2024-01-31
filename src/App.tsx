import { useEffect, useMemo, useRef, useState } from "react";
import { KEY_TYPE } from "../types";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Typing from "./components/Typing/Typing";

import data from "./assets/words.json";

import Options from "./components/Options/Options";
import convertLettersToWords from "./lib/util/convert-letters-to-words";
import createInitialLetters from "./lib/util/create-initial-letters";
import generateRandomWordlist from "./lib/util/generate-random-wordlist";
import getSpaceKeyIndexesFromLetters from "./lib/util/get-space-key-indexes-from-letters";

function App() {
   // States
   const [numberOfWords, setNumberOfWords] = useState(25);
   const [numberOfWordsTyped, setNumberOfWordsTyped] = useState(0);
   const [input, setInput] = useState("");
   const [wordsList, setWordsList] = useState<string[]>(
      generateRandomWordlist(data, numberOfWords + 1)
   );

   // Refs
   const [letters, setLetters] = useState(createInitialLetters(wordsList));
   const [wpm, setWPM] = useState(0);

   const prevWordsCount = useRef(0);
   const startTime = useRef(0);

   // Memos
   const wordsConverted = useMemo(
      () => convertLettersToWords(letters),
      [letters]
   );

   const spaceKeyIndexes = useMemo(
      () => getSpaceKeyIndexesFromLetters(letters),
      [letters]
   );

   const handleNumberOfWordsChange = (numberOfWords: number) => {
      let _wordsList = generateRandomWordlist(data, numberOfWords + 1);

      setNumberOfWords(numberOfWords);
      setWordsList(_wordsList);
      setLetters(createInitialLetters(_wordsList));
      setNumberOfWordsTyped(0);
      setInput("");
   };

   const handleWordsTyped = () => {
      const words = input.trim().split(" ");
      const currentWordsCount =
         words[words.length - 1] === "" ? words.length - 1 : words.length;

      if (currentWordsCount < prevWordsCount.current) {
         setNumberOfWordsTyped((prevCount) =>
            prevCount > 0 ? prevCount - 1 : 0
         );
      } else if (currentWordsCount > prevWordsCount.current) {
         setNumberOfWordsTyped((prevCount) => prevCount + 1);
      }

      if (prevWordsCount.current === 0) {
         startTime.current = Date.now();
      } else {
         const elapsedTime = (Date.now() - startTime.current) / 60000;
         const wpm = currentWordsCount / elapsedTime;
         setWPM(wpm);
      }

      prevWordsCount.current = currentWordsCount;
   };

   const handleKeyUp = (ev: KeyboardEvent) => {
      if (input.length === letters.length) {
         return;
      }

      const key = ev.key;
      let _input = input;
      let _letters = [...letters];

      if (key.length === 1) {
         _input += key;
         let currLetter = _letters[_input.length - 1];
         _letters[_input.length - 1] =
            currLetter.key === key
               ? { ...currLetter, state: KEY_TYPE.CORRECT }
               : { ...currLetter, state: KEY_TYPE.INCORRECT };
      } else if (key === "Backspace") {
         _input = _input.slice(0, -1);
         let currLetter = _letters[_input.length];
         _letters[_input.length] = { ...currLetter, state: KEY_TYPE.NULL };
      }

      setInput(_input);
      setLetters(_letters);
   };

   useEffect(() => {
      document.addEventListener("keyup", handleKeyUp);
      return () => {
         document.removeEventListener("keyup", handleKeyUp);
      };
   }, [input, letters]);

   useEffect(() => {
      handleWordsTyped();
   }, [input, letters]);

   return (
      <div className="w-screen h-screen flex flex-col mx-auto items-center bg-light-100">
         <Header />
         <Options handleNumberOfWordsChange={handleNumberOfWordsChange} />
         <Typing
            input={input}
            spaceKeyIndexes={spaceKeyIndexes}
            words={wordsConverted}
            numberOfWordsTyped={numberOfWordsTyped}
            numberOfWords={numberOfWords}
            wpm={wpm}
         />
         <Footer />
      </div>
   );
}

export default App;
