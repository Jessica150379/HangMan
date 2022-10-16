import state1 from "./images/state1.GIF";
import state2 from "./images/state2.GIF";
import state3 from "./images/state3.GIF";
import state4 from "./images/state4.GIF";
import state5 from "./images/state5.GIF";
import state6 from "./images/state6.GIF";
import state7 from "./images/state7.GIF";
import state8 from "./images/state8.GIF";
import state9 from "./images/state9.GIF";
import state10 from "./images/state10.gif";
import state11 from "./images/state11.GIF";
import { useState, forwardRef, useImperativeHandle } from "react";

const HangMan = forwardRef((props, ref) => {
  //Define variables and props
  const letter1 = props.letter1;
  const getCounterL = props.getCounterL;
  let indices;
  let temp = [];
  let counterL;
  const randomWord = props.randomWord;

  //Function that get called in Alphabet(checkletter function), recieves the letters clicked on via an array, sorts array then iterates over the letters and if
  // they are not duplicate it checks if they are in the randomword, then sets a hangman step based on the amount of non randomword letters
  useImperativeHandle(ref, () => ({
    setHangMan() {
      let letter1Sort = letter1.sort();

      for (let i = 0; i < letter1Sort.length; i++) {
        if (letter1Sort[i] !== letter1Sort[i + 1]) {
          indices = randomWord.indexOf(letter1Sort[i]);

          if (indices === -1) {
            temp.push(indices);
          }
        }

        counterL = temp.length;

        if (counterL === 1) {
          setHang(
            <div>
              {" "}
              <img src={state2} alt="state2" className="hangman" />
            </div>
          );
        }
        if (counterL === 2) {
          setHang(
            <div>
              {" "}
              <img src={state3} alt="state3" className="hangman" />
            </div>
          );
        }
        if (counterL === 3) {
          setHang(
            <div>
              {" "}
              <img src={state4} alt="state4" className="hangman" />
            </div>
          );
        }
        if (counterL === 4) {
          setHang(
            <div>
              {" "}
              <img src={state5} alt="state5" className="hangman" />
            </div>
          );
        }
        if (counterL === 5) {
          setHang(
            <div>
              {" "}
              <img src={state6} alt="state6" className="hangman" />
            </div>
          );
        }
        if (counterL === 6) {
          setHang(
            <div>
              {" "}
              <img src={state7} alt="state7" className="hangman" />
            </div>
          );
        }
        if (counterL === 7) {
          setHang(
            <div>
              {" "}
              <img src={state8} alt="state8" className="hangman" />
            </div>
          );
        }
        if (counterL === 8) {
          setHang(
            <div>
              {" "}
              <img src={state9} alt="state9" className="hangman" />
            </div>
          );
        }
        if (counterL === 9) {
          setHang(
            <div>
              {" "}
              <img src={state10} alt="state10" className="hangman" />
            </div>
          );
        }
        //Once all hangman steps are completed the player loses
        if (counterL === 10) {
          setHang(
            <div>
              <img src={state11} alt="state11" className="hangman" />
              <h1 className="winLose">YOU DEAD!!</h1>
            </div>
          );
        }
      }
      //function that sends the counterL variable to Alphabet
      getCounterL(counterL);
    },
  }));

  const [hang, setHang] = useState(
    <div>
      {" "}
      <img src={state1} alt="state2" className="hangman" />
    </div>
  );

  return <div>{hang}</div>;
});

export default HangMan;
