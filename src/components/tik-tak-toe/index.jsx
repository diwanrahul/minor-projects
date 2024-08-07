/* eslint-disable react/prop-types */
import "./style.css";
import { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TikTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
const [status, setStatus] = useState("");
const [firstPlayer, setFirstPlayer] = useState(
    localStorage.getItem("firstPlayer") ? localStorage.setItem("firstPlayer", firstPlayer) : ""
);
const [secondPlayer, setSecondPlayer] = useState(localStorage.getItem("firstPlayer") ? localStorage.setItem("firstPlayer", firstPlayer) : "");

  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const getWinner = (squares) =>{
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],  
        ];

        for(let i=0;i<winningPatterns.length;i++){
            const [x,y,z] = winningPatterns[i];

            if(squares[x] && squares[x]===squares[y] && squares[x]==squares[z]){
                return squares[x];
            }
        }

        return null;
  }


  useEffect(()=>{
        if(!getWinner(squares) && squares.every((item) => item !== "")){
            setStatus(`This is draw ! please restart the game`);
        }else if(getWinner(squares)){
            setStatus(`Winner is 
            ${getWinner(squares) === "X" ? firstPlayer : secondPlayer }.please restart the game`);
        }else {
            setStatus(`${isXTurn ? firstPlayer : secondPlayer} is your turn`);
        }
  },[squares, isXTurn]);


  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    setStatus("");
  }


  return (
    <div className="tic-tac-toe-container">
        <div className="outline px-8 py-4 rounded-md mb-5 flex flex-col gap-3">
            <input
            onChange={(e)=>setFirstPlayer(e.target.value)} 
            value={firstPlayer}
            className="border-2 p-2 border-black rounded" placeholder="enter first player name" type="text" name="firstPlayer"/>
            <input 
            onChange={(e)=> setSecondPlayer(e.target.value)} value={secondPlayer} className="border-2 p-2 border-black rounded" placeholder="enter second player name" type="text" name="secondPlayer"/>
        </div>
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <h1>{status} </h1>

      <button className="bg-blue-700 px-4 py-2 font-semibold mt-5 text-white rounded-md hover:bg-blue-400 " onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}
