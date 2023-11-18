interface Props {
   numberOfWords: number,
}

function Statistics({ numberOfWords }: Props) {
  return (
    <div className="mb-2 w-fit px-4 py-2 rounded-md shadow-2xl flex gap-4 text-xl font-semibold text-white-tx-100 bg-primary-100">
      <p>0/{numberOfWords}</p>
      <p>WPM</p>
    </div>
  );
}

export default Statistics