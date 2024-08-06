import { useState } from "react"
import Player from "./Player"
import GameBoard from "../GameBoard"
import Log from "./Log"
import GameOver from "./GameOver"
const firstGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
function boardHandle(turnses){
    let gameBoard = firstGameBoard;
    for(const obj of turnses) {
    const {square:{colIndex,rowIndex}, player} = obj;
    console.log(rowIndex,colIndex,player)
    gameBoard[rowIndex][colIndex] = player
        } 
    return gameBoard
}
export default function Main (){
    const [gameTurns,setgameTurns] = useState([])
    const gameBoard = boardHandle(gameTurns)
    function playerSelect(colIndex,rowIndex){
        setgameTurns(prevTurns => {
            let player = 'X'
            if(prevTurns.length>0 && prevTurns[prevTurns.length-1].player == 'X'){
                player = 'O'
            }  
            const newTurn = {square:{colIndex, rowIndex}, player} 
            const updTurns = JSON.parse(JSON.stringify(prevTurns))
            updTurns.push(newTurn)
            console.log(updTurns)
            return updTurns
        })    
    }
    return(
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                 <Player turns={gameTurns} name='Player1' symbol='X'></Player>   
                 <Player turns={gameTurns} name='Player2' symbol='O'></Player>
                </ol>
                <GameBoard onSelectPlayer={playerSelect} board={gameBoard}/>
                <GameOver/> {//Доделать компонент гейм овер. Контейнер имеет див айди game-over(Внутри кнопка рестарт и h2 с текстом гейм овер)}
}
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}
// main{players,gameboard}, log
// disable(attribute) btn - онклик не работает после нажатия 
// в виде массива вариации выигрыша

//REFACTORING CODE