interface Props {
  handleNumberOfWordsChange: (value: number) => void;
}

function Header({ handleNumberOfWordsChange }: Props) {
  const handleButtonClick = (e: any) => {
    const numberOfWords = parseInt(e.target.name);
    console.log(numberOfWords);
    handleNumberOfWordsChange(numberOfWords);
  };

  return (
    <div className="pt-5 flex flex-col gap-2 items-center">
      <div className="flex items-center gap-1">
        <img src="/keyboard.png" alt="keyboard-logo" className="w-12" />
        <h1 className="text-2xl font-semibold">mini-type</h1>
      </div>

      <div className="px-4 py-2 flex gap-4 rounded-md bg-[#132043]">
        <button
          name="10"
          onClick={handleButtonClick}
          className="hover:text-[#F1B4BB]"
        >
          10
        </button>
        <button
          name="25"
          onClick={handleButtonClick}
          className="hover:text-[#F1B4BB]"
        >
          25
        </button>
        <button
          name="50"
          onClick={handleButtonClick}
          className="hover:text-[#F1B4BB]"
        >
          50
        </button>
        <button
          name="100"
          onClick={handleButtonClick}
          className="hover:text-[#F1B4BB]"
        >
          100
        </button>
      </div>
    </div>
  );
}

export default Header;
