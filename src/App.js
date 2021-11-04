import "./App.css";
import { useState } from "react";
import emojiList from "./assets/emojiList.json";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";

const App = () => {
  const [searching, setSearching] = useState("");

  const handleSearchChange = (event) => {
    const changedValue = event.target.value;
    setSearching(changedValue);
  };

  return (
    <div>
      <header>
        <Search handleSearchChange={handleSearchChange} />
      </header>
      <main>
        {!searching.length > 0
          ? emojiList.map((emoji, index) => {
              return <Line key={index} title={emoji.title} symbol={emoji.symbol} />;
            })
          : emojiList.map((emoji, index) => {
              const rSearch = new RegExp(/searching/i);
              console.log("test");
              if (rSearch === emoji.keywords) {
                return <Line key={index} title={emoji.title} symbol={emoji.symbol} />;
              }
              return <p>test1</p>;
            })}
      </main>
      <Footer />
    </div>
  );
};

export default App;
