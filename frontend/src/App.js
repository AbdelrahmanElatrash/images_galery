import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/search";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");

  const submithandler = function submithandler(e) {
    e.preventDefault();
    console.log(word);

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });

    setWord(""); // to clear search input and back it to default
  };
  //console.log(word);

  //console.log(process.env.REACT_APP_UNSPLASH_KEY);
  // THIS LINE MUST BE DELETED

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} submithandler={submithandler} />
    </div>
  );
}

export default App;
