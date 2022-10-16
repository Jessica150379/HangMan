import { useState, forwardRef, useImperativeHandle } from "react";

const Letters = forwardRef((props, ref) => {
  //Define variables, props and refs
  const letter1 = props.letter1;
  const alpha = props.alpha;
  const letter = props.letter;
  const checkLetter = props.checkLetter;

  //Function that gets called in Alphabet(checkLetter function), checks letter that gets clicked on, if the letter exists in the randomword
  //then find the index and replace _ with that letter amd change the style of that letter
  useImperativeHandle(ref, () => ({
    setLettersA() {
      for (let i = 0; i < letter1.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
          if (letter1[i] === alpha[j]) {
            let index = alpha.indexOf(letter1[i]);

            letter[index] = (
              <div>
                <li style={{ color: "orangered", opacity: "0.3" }}>
                  {letter1[i]}
                </li>
              </div>
            );
          }
        }
      }

      setLettersB(
        <div className="letters" onClick={checkLetter}>
          {letter}
        </div>
      );
    },
  }));

  const [lettersB, setLettersB] = useState(
    <div className="letters" onClick={checkLetter}>
      {letter}
    </div>
  );
  return <div>{lettersB}</div>;
});
export default Letters;
