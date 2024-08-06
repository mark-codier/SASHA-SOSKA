export default function Log({turns}){
    return(
        <ol id="log">
            {turns.map(({square:{colIndex,rowIndex},player})=>{
                return <li key={`${rowIndex} ${colIndex}`}>{player} selected row:{rowIndex} col:{colIndex}</li>
            })}
        </ol>
    )
}