
import { useState } from 'react';


function Square({value, onSquareClick}) {

  
 
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 text-lg leading-9" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Bord() {
  const [squares, setSqures] = useState(Array(9).fill(null));
  const [isNext, setNext] = useState(true);

  

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O"
    }
    setSqures(nextSquares);
    setNext(!isNext)
  }
  return (
    <>
      <div>{status}</div>
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
};

