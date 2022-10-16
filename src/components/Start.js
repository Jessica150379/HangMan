import Alphabet from "./Alphabet";
import { useState } from "react";
import Reset from "./Reset";
import Help from "./Help";
import words from "./dictionary.js";

const Start = () => {
  let num;
  let randomWord;

  num = Math.floor(Math.random() * words.length);
  randomWord = words[num].toUpperCase();

  //This function  resets the game by rendering the Reset component which renders a fresh HangMan(game) component
  function reset() {
    setStart(
      <div>
        <Reset />
      </div>
    );
  }

  //This function renders the Help component (Suppose I could'v have also passed this via props)
  function help() {
    setStart(
      <div>
        <Help />
      </div>
    );
  }
  //Setting state to render the alphabet(game) component with a reset button that calls the reset function above
  const [start, setStart] = useState(
    <div>
      <div>
        <Alphabet randomWord={randomWord} />
      </div>
      <button className="reset" onClick={reset}>
        Reset Game
      </button>{" "}
      <button className="helpStart" onClick={help}>
        Help
      </button>
      <br></br>
      <br></br>
    </div>
  );

  return <div>{start}</div>;
};

export default Start;
