import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import Words from "./components/Words";

import wordsData from "./wordlist/words.json";

function App() {
  const [numberOfWords, setNumberOfWords] = useState(wordsData.length);

  return (
    <div className="w-screen h-screen">
      <Header setNumberOfWords={setNumberOfWords} />
      <div>
        <Statistics />
        <Words words={wordsData.slice(0, numberOfWords)} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
