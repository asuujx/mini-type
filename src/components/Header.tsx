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
    <div className="w-full">
      <div className="max-w-xs mx-auto bg-[hsl(200,18%,90%)] rounded-lg shadow-md shadow-gray-500 m-10 p-5 flex flex-col gap-2 items-center tablet:max-w-lg laptop:max-w-4xl laptop:mx-auto laptop:flex laptop:flex-row laptop:justify-between desktop:max-w-5xl transition">
        <div className="flex items-center gap-1">
          <a
            className="text-2xl font-medium text-[hsl(200,100%,50%)] hover:text-[hsl(200,100%,75%)]"
            href=""
          >
            mini-type
          </a>
        </div>

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
      </div>
    </div>
  );
}

export default Header;
