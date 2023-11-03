function Header({ setNumberOfWords }: any) {
  const show10Words = () => {
    setNumberOfWords(10);
  };

  const show25Words = () => {
    setNumberOfWords(25);
  };

  const show50Words = () => {
    setNumberOfWords(50);
  };

  const show100Words = () => {
    setNumberOfWords(100);
  };

  return (
    <div className="pt-5 flex flex-col gap-2 items-center">
      <div className="flex items-center gap-1">
        <img src="/keyboard.png" alt="keyboard-logo" className="w-12" />
        <h1 className="text-2xl font-semibold">mini-type</h1>
      </div>

      <div className="px-4 py-2 flex gap-4 rounded-md bg-[#132043]">
        <button onClick={show10Words} className="hover:text-[#F1B4BB]">
          10 
        </button>
        <button onClick={show25Words} className="hover:text-[#F1B4BB]">
          25
        </button>
        <button onClick={show50Words} className="hover:text-[#F1B4BB]">
          50
        </button>
        <button onClick={show100Words} className="hover:text-[#F1B4BB]">
          100
        </button>
      </div>
    </div>
  );
}

export default Header;
