import Start from "./Start";
import { useState } from "react";

//Component that renders the rules of the game
const Help = () => {
  //Function that renders a fresh game
  function back() {
    setHelp(
      <div>
        <Start />
      </div>
    );
  }

  const [help, setHelp] = useState(
    <div className="helpDiv">
      <div className="help">
        <h1>How to play?</h1> What are the rules of hangman? Hangman is a word
        guessing game where the player guesses letters.<br></br> Each incorrect
        guess brings you closer to being “hanged”. <br></br>This game helps to
        sharpen your spelling and word-decoding skills.
      </div>
      <div className="helpButD">
        <button className="helpBut" onClick={back}>
          Back to game
        </button>
      </div>
    </div>
  );
  return (
    <div>
      <div>{help}</div>
    </div>
  );
};

export default Help;
