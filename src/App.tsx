import { useEffect, useMemo, useState } from "react";
import { KEY_TYPE } from "../types";

import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Typing from "./components/Typing/Typing";

import data from "./assets/words.json";

import Options from "./components/Options/Options";
import convertLettersToWords from "./lib/util/convert-letters-to-words";
import createInitialLetters from "./lib/util/create-initial-letters";
import getSpaceKeyIndexesFromLetters from "./lib/util/get-space-key-indexes-from-letters";

function App() {
  const [numberOfWords, setNumberOfWords] = useState(25);
  const [wordsList, setWordsList] = useState<string[]>(
    data.words.slice(0, numberOfWords + 1)
  );
  const [input, setInput] = useState("");
  const [letters, setLetters] = useState(createInitialLetters(wordsList));
  const wordsConverted = useMemo(
    () => convertLettersToWords(letters),
    [letters]
  );
  const spaceKeyIndexes = useMemo(
    () => getSpaceKeyIndexesFromLetters(letters),
    [letters]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [input, letters]);

  const handleNumberOfWordsChange = (numberOfWords: number) => {
    let _wordsList = data.words.slice(0, numberOfWords + 1);
    setNumberOfWords(numberOfWords);
    setWordsList(_wordsList);
    setLetters(createInitialLetters(_wordsList));
    setInput("");
  };

  // console.log(words);
  // console.log(`${numberOfWords} | ${words}`);

  const handleKeyUp = (ev: KeyboardEvent) => {
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

  return (
    <div className="w-screen h-screen flex flex-col mx-auto items-center bg-light-100">
      <Header />
      <Options handleNumberOfWordsChange={handleNumberOfWordsChange} />
      <Typing
        input={input}
        spaceKeyIndexes={spaceKeyIndexes}
        words={wordsConverted}
        numberOfWords={numberOfWords}
      />
      <Footer />
    </div>
  );
}

export default App;
