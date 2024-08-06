export default function GameOver({winner}){
    return (
        <div id="game-over">
            <h2>Game OVer!</h2>
            <p>{winner} wins</p>
            <p><button onClick={handleRestart}>Restart Games</button></p>
        </div>
    )
}
function handleRestart(){
    setGameTurns([])
}