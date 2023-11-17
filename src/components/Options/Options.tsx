import { useState } from "react";
import Option from "./Option";

interface Props {
  handleNumberOfWordsChange: (value: number) => void;
}

function Options({ handleNumberOfWordsChange }: Props) {
  const [isActive, setActive] = useState<number | null>(null);
  const options = [10, 25, 50, 100];

  const handleButtonClick = (numberOfWords: number) => {
    handleNumberOfWordsChange(numberOfWords);
    setActive(numberOfWords);
  };

  return (
    <div className="mt-14 px-8 py-4 text-lg rounded-md shadow-2xl font-semibold flex gap-6 bg-primary-100 text-white-tx-100">
      {options.map((value) => (
        <Option
          key={value}
          value={value}
          isActive={isActive === value}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

export default Options;
