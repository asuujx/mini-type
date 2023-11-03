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
  }

  return (
    <div className=" pt-5 flex flex-col items-center">
      <div className="flex items-center">
        <img src="/keyboard.png" alt="keyboard-logo" className="w-12" />
        <h1 className="text-2xl font-semibold">mini-type</h1>
      </div>

      <div className="flex gap-2">
        <button onClick={show10Words}>10</button>
        <button onClick={show25Words}>25</button>
        <button onClick={show50Words}>50</button>
        <button onClick={show100Words}>100</button>
      </div>
    </div>
  );
}

export default Header