/*
    1.version 4
    2. v3 te spread operator use korechilam. but spread operator main array kei modify kore fele. history er jonne amar main array change kora jabe na. so v4 e slice diye new array create korechi. and new array er change setSquares diye update korle react easily detect korte pare and re-render korte pare.
    
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
    const newSquares = squares.slice(); // Create a copy of the squares array
    newSquares[index] = "X";
    setSquares(newSquares);
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
