/*
    1.version 3: ekhane lifting the state up kora hobe.
    2. version 2 te Square component e state chilo and Square component theke state er maddhome amra square e ekta static value assign korechilam. but amra condition er maddhome value assign korte chai. first e 'X' thakle erpor 'O' hobe. so amake track rakhte hobe aager square e value ki chilo. ei track ta Square component rekhe lav nai, track rakha lagbe Square component er parent Board component e. tai Square component theke state ta Board component e lifting up korte hobe. 

    3. bojhar shubidarthe only ekta square niye kaj korsi.
    4. for concept see src/components/concept.md 
*/
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // state hishebe array newa hoise

  function handleClick() {
    squares[0] = "X";
    // setSquares(squares); // state update korle react re-render hoy.state hishebe array or object niye kaj korle ektu jhamela hoy. amra jokhon array or object er kono value change or update kori, tokhon react render kore aager array and changed array compare kore dekhe. same array or object diye state update korle react bujhte pare na je state change hoyeche. so react render ow kore na.
    setSquares([...squares]); // spread operator er maddhome notun array create kore setSquares diye state update kora hoyeche.ekhn react re-render er shomoy state er change identify korte parbe.
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>

      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>

      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default Board;
