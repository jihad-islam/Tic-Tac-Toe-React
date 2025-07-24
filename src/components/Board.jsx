/*
    1.version 6
    2. ei version e amra winner er logic apply korbo.
    3. winner er logic ta holo 'X' or 'O' jodi kono row, column, or diagonal e same value thake tahole winner hobe.
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
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    if (squares[index]) {
      return;
    }
    const newSquares = squares.slice();

    if (isXNext) {
      newSquares[index] = "X";
    } else {
      newSquares[index] = "O";
    }

    setIsXNext(!isXNext);
    setSquares(newSquares);
  }

  return (
    <>
      <div className="flex">
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
