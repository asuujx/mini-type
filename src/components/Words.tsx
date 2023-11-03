interface Props {
  words: string[]
}

function Words(wordsData: Props) {
  
  const { words } = wordsData;

  return (
    <div>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </div>
  );
}

export default Words;
