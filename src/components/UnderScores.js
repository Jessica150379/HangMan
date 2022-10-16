import { useState, forwardRef, useImperativeHandle } from "react";

const UnderScores = forwardRef((props, ref) => {
  //Define variables, props
  const randomWord = props.randomWord;
  const letter1 = props.letter1;
  const passedCounterL = props.passedCounterL;

  let indices = [];
  let underScores = [];

  for (let i = 0; i < randomWord.length; i++) {
    underScores.push("_ ");
  }

  //Function that gets called in Alphabet(checkLetter function). Checks if letters are in randomletter, if it is then find the indices
  //sets the underscores to the letters
  useImperativeHandle(ref, () => ({
    setUnderScores() {
      for (let i = 0; i < letter1.length; i++) {
        for (let j = 0; j < randomWord.length; j++) {
          if (letter1[i] === randomWord[j]) {
            indices.push(j);
            for (let k = 0; k < indices.length; k++)
              underScores[indices[k]] = letter1[i];
            indices = [];

            setGame(<div className="underScore">{underScores}</div>);
          }
        }
      }

      //fixing the format of the underscores to be compared to randomWord
      let temp = underScores.toString();
      let string = temp.replace(/,/g, "");

      //Checks if all letters are there to complete the randomword and renders the word plus Win message
      if (string === randomWord) {
        setGame(
          <div>
            <div className="underScore">{underScores}</div>
            <div className="win">
              <h1>YOU WIN!!</h1>
            </div>
          </div>
        );
      }

      //passedCounterL is the variable that holds the number of hangman steps
      //if its at the last step then show the randomword instead of underscores

      for (let k = 0; k < passedCounterL.length; k++) {
        if (passedCounterL[k] === 10) {
          setGame(<div className="underScore">{randomWord}</div>);
        }
      }
    },
  }));

  const [game, setGame] = useState(
    <div className="underScore">{underScores}</div>
  );

  return (
    <div>
      <div>{game}</div>
      <div></div>
    </div>
  );
});

export default UnderScores;
