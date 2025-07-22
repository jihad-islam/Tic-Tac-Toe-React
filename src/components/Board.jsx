/*
    square and board duitai component. components are nothing else but a function. but board holo default component.
*/

function Square({ value }) {
  // function er kaj part 2 te. part 1 e just basic dekhano hoise
  function handleClick() {
    console.log(value);
  }

  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      //   onClick={() => console.log(value)}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>

      <div>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>

      <div>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}

export default Board;
