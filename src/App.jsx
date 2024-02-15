import { useState } from "react";

export default function game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const oIsNext = currentMove % 2 === 0;
    const squares = history[currentMove];
    
    function handlePlay(nextSquares) {
        const newHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(newHistory);
        setCurrentMove(newHistory.length - 1);
    }

    function jumpTo(move) {
      setCurrentMove(move);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Move to step ' + move;
        } else {
            description = 'Move to start';
        }
        return (
            <li key={move}>
              <button onClick={() => { jumpTo(move) }}>
                {description}
              </button>
            </li>    
        );
    })

    return (
      <div className="game">
          <div className="game-board"> 
              <Board oIsNext={oIsNext} squares={squares} onPlay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
      </div>
    )
}

function Board({oIsNext, squares, onPlay}) {  
    function onSquareClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return ;
      }
      const nextSquares = squares.slice();
      if (oIsNext) {
        nextSquares[i] = 'O';
      } else {
        nextSquares[i] = 'X';
      }
      onPlay(nextSquares);
    }

    let status;
    const winner = calculateWinner(squares);
    if (winner) {
      status = "Winner: " + winner;
    } else { 
      status = "Next player is " + (oIsNext ? "O" : "X");
    }
    
    return (
      <>
        <div className="status"> {status} </div>
        <div className="board-row">
        <Cell value={squares[0]} onCellClick={()=>onSquareClick(0)}/>
        <Cell value={squares[1]} onCellClick={()=>onSquareClick(1)}/>
        <Cell value={squares[2]} onCellClick={()=>onSquareClick(2)}/>
        </div>
        <div className="board-row">
        <Cell value={squares[3]} onCellClick={()=>onSquareClick(3)}/>
        <Cell value={squares[4]} onCellClick={()=>onSquareClick(4)}/>
        <Cell value={squares[5]} onCellClick={()=>onSquareClick(5)}/>
        </div>
        <div className="board-row">
        <Cell value={squares[6]} onCellClick={()=>onSquareClick(6)}/>
        <Cell value={squares[7]} onCellClick={()=>onSquareClick(7)}/>
        <Cell value={squares[8]} onCellClick={()=>onSquareClick(8)}/>
        </div>
      </>
    )
}

function Cell({value, onCellClick}) {
  return (
    <button className="square" onClick={onCellClick}>{value}</button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}