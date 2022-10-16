import Start from "./Start";
import Alphabet from "./Alphabet";
import Help from "./Help";
import { useState } from "react";
import words from "./dictionary.js";

const Reset = (props) => {
  //Define variables and props
  let num;
  let randomWord;

  //Find the random word from dictionary.js
  num = Math.floor(Math.random() * words.length);
  randomWord = words[num].toUpperCase();

  //This function also resets the game by rendering the Start component which renders a fresh HangMan(game) component
  function resetR() {
    setReset(
      <div>
        <Start />
      </div>
    );
  }

  //This function renders the Help component
  function help() {
    setReset(
      <div>
        <Help />
      </div>
    );
  }
  //Setting state to render the alphabet(game) component with a reset button that calls the reset function above
  const [reset, setReset] = useState(
    <div>
      <div>
        <Alphabet randomWord={randomWord} />
      </div>
      <button className="reset" onClick={resetR}>
        Reset Game
      </button>{" "}
      <button className="helpStart" onClick={help}>
        Help
      </button>
      <br></br>
      <br></br>
    </div>
  );

  return <div>{reset}</div>;
};
export default Reset;
