import { Words } from "../../../types";
import PrintWords from "./PrintWords";
import Statistics from "./Statistics";

interface Props {
  input: string;
  words: Words;
  spaceKeyIndexes: number[];
  numberOfWords: number;
}

function Typing({ input, words, spaceKeyIndexes, numberOfWords }: Props) {
  return (
    <div className="w-full h-full container mx-auto grid place-items-center">
      <div className="mx-5 tablet:max-w-2xl tablet:mx-auto laptop:mx-auto laptop:max-w-4xl desktop:mx-auto desktop:max-w-6xl transition-all ease-in-out">
        <Statistics numberOfWords={numberOfWords} />
        <PrintWords
          input={input}
          words={words}
          spaceKeyIndexes={spaceKeyIndexes}
        />
      </div>
    </div>
  );
}

export default Typing;
