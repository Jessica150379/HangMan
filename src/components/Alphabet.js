import UnderScores from "./UnderScores";
import HangMan from "./HangMan";
import Letters from "./Letters";
import { useRef } from "react";
import { useState } from "react";

const Alphabet = (props) => {
  //Define variables, props and refs
  const UnderScoresRef = useRef();
  const HangManRef = useRef();
  const LettersRef = useRef();
  const randomWord = props.randomWord;
  console.log(randomWord);

  let alpha = [];
  let letter1 = [];
  let letter2;
  let passedCounterL = [];

  const [letters5, setLetters5] = useState("");

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-".split("");
  for (let i = 0; i < alphabet.length; i++) {
    alpha.push(alphabet[i]);
  }

  //render array using .map
  const letter = alpha.map((element) => {
    return (
      <div>
        <li key={element}>{element}</li>
      </div>
    );
  });

  // function that checks letter clicked on by calling 3 functions from the components(see comments inside components)
  function checkLetter(e) {
    letter2 = e.target.innerHTML;
    letter1.push(letter2);

    HangManRef.current.setHangMan();
    UnderScoresRef.current.setUnderScores();
    LettersRef.current.setLettersA();
  }

  //Callback function that retrieves the number of incorrect guesses from the HangMan component
  function getCounterL(counterL) {
    passedCounterL.push(counterL);

    return passedCounterL;
  }

  //Array with 3 components
  let comp = [
    <Letters
      letter1={letter1}
      alpha={alpha}
      letter={letter}
      checkLetter={checkLetter}
      ref={LettersRef}
      setLetters5={setLetters5}
    />,

    <UnderScores
      randomWord={randomWord}
      letter1={letter1}
      ref={UnderScoresRef}
      passedCounterL={passedCounterL}
    />,

    <HangMan
      letter1={letter1}
      randomWord={randomWord}
      ref={HangManRef}
      getCounterL={getCounterL}
    />,
  ];

  //.map to render components
  const components = comp.map((element) => {
    return <div>{element}</div>;
  });

  return (
    <div className="game">
      <div>{letters5}</div>
      <div>{components}</div>
    </div>
  );
};

export default Alphabet;
