import { KEY_TYPE, Words } from "../../types";
import Cursor from "./Cursor";

interface Props {
  input: string;
  words: Words;
  spaceKeyIndexes: number[];
  numberOfWords: number;
}

function Typing({ input, words, spaceKeyIndexes, numberOfWords }: Props) {
  return (
    <div className="w-full h-full container mx-auto grid place-items-center">
      <div className="mx-5 tablet:mx-10 laptop:max-w-4xl desktop:max-w-5xl">
        <div className="w-full flex gap-4 text-xl text-[hsl(200,100%,50%)]">
          <p>0/{numberOfWords}</p>
          <p>WPM</p>
        </div>
        <div className="max-w-6xl flex flex-wrap gap-x-2 gap-y-1 relative">
          {input.length === 0 && <Cursor className="top-0 left-0" />}
          {words.map((word, idx) => (
            <div key={idx} className="flex">
              {word.map((letter) => (
                <div
                  key={letter.idx}
                  className="relative tracking-widest select-none"
                >
                  <span
                    className={`
              text-2xl
              ${letter.state === KEY_TYPE.NULL && "text-gray-500"}
              ${letter.state === KEY_TYPE.CORRECT && "text-black"}
              ${letter.state === KEY_TYPE.INCORRECT && "text-[#D80032]"}
        `}
                  >
                    {letter.key}
                  </span>
                  {letter.idx === input.length &&
                    spaceKeyIndexes.includes(letter.idx - 1) && (
                      <Cursor className="top-0 left-0" />
                    )}
                  {letter.idx === input.length - 1 && (
                    <Cursor className="top-0 right-0" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Typing;
