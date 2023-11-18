import { KEY_TYPE, Words } from "../../../types";
import Cursor from "./Cursor";

interface Props {
  input: string;
  words: Words;
  spaceKeyIndexes: number[];
}

function PrintWords({ input, words, spaceKeyIndexes }: Props) {
  return (
    <div className=" flex flex-wrap gap-x-2 gap-y-1 relative max-h-28 overflow-scroll">
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
              ${letter.state === KEY_TYPE.NULL && "text-black-tx-200"}
              ${letter.state === KEY_TYPE.CORRECT && "text-black"}
              ${letter.state === KEY_TYPE.INCORRECT && "text-red"}
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
  );
}

export default PrintWords;
