/*
    1. this is version 3: ekhane lifting the state up kora hobe.
*/
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(1);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      {/* allignment fix korar jonne protita div e flex dewa hoise */}
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
