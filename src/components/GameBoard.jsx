import { useState } from "react"
export default function GameBoard({onSelectPlayer,board}){
    function Board(){
        return(
            <>
            {board.map((row,i)=>{
                return <li key={i}>
                    <ol>
                        {row.map((playerSymbol,j)=>{
                            return <li key={j}>
                                <button disabled={playerSymbol != null} onClick={()=>onSelectPlayer(j,i)}>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>
            })}
            </>
        )
    }
    return(
        <ol id="game-board">
            <Board/> 
       </ol>
    )
}
// const [gameBoard,setGameBoard] = useState(firstGameBoard)
// function kletkaHandler(i,j,symbol){
//     if(symbol == null){
//     setGameBoard(prevGB=>{
//         const updGB = [...prevGB.map(innerArr=>[...innerArr])]
//         updGB[i][j] = activePlayerSymbol
//         return updGB
//     })
//     // state is immutable
//     // не стоит менять state на прямую
//     onSelectPlayer()}
// }