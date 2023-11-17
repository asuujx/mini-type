interface Props {
  handleNumberOfWordsChange: (value: number) => void;
}

function Options({ handleNumberOfWordsChange }: Props) {
  const handleButtonClick = (e: any) => {
    const numberOfWords = parseInt(e.target.name);
    console.log(numberOfWords);
    handleNumberOfWordsChange(numberOfWords);
  };
  return (
    <div className="px-4 py-2 text-lg flex gap-4 text-black">
      <button
        name="10"
        onClick={handleButtonClick}
        className="hover:text-[hsl(200,100%,75%)]"
      >
        10
      </button>
      <button
        name="25"
        onClick={handleButtonClick}
        className="hover:text-[hsl(200,100%,75%)]"
      >
        25
      </button>
      <button
        name="50"
        onClick={handleButtonClick}
        className="hover:text-[hsl(200,100%,75%)]"
      >
        50
      </button>
      <button
        name="100"
        onClick={handleButtonClick}
        className="hover:text-[hsl(200,100%,75%)]"
      >
        100
      </button>
    </div>
  );
}

export default Options;
