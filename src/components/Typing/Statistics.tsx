interface Props {
  numberOfWordsTyped: number;
  numberOfWords: number;
  wpm: number;
}

function Statistics({ numberOfWords, numberOfWordsTyped, wpm }: Props) {
  return (
    <div className="mb-2 w-fit px-4 py-2 rounded-md shadow-2xl flex gap-4 text-xl font-semibold text-white-tx-100 bg-primary-100">
      <p>{numberOfWordsTyped}/{numberOfWords}</p>
      <p>{wpm.toFixed(2)}</p>
    </div>
  );
}

export default Statistics;
