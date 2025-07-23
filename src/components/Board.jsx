/*
    1.version 3: ekhane lifting the state up kora hobe.
    2. version 2 te Square component e state chilo and Square component theke state er maddhome amra square e ekta static value assign korechilam. but amra condition er maddhome value assign korte chai. first e 'X' thakle erpor 'O' hobe. so amake track rakhte hobe aager square e value ki chilo. ei track ta Square component rekhe lav nai, track rakha lagbe Square component er parent Board component e. tai Square component theke state ta Board component e lifting up korte hobe. 
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
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    squares[index] = "X";
    // setSquares(squares);
    setSquares([...squares]);
  }

  return (
    <>
      <div className="flex">
        {/* <Square value={squares[0]} onSquareClick={handleClick(0)} /> */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
