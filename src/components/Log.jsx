export default function Log( {turns }) {
    return (
        <ol id="log">
            <h3>Lista zagrań:</h3>
            {turns.map((turn) => 
                <li key={`${turn.square.row}${turn.square.col}`}>
                 Gracz z "{turn.player}" zajął pozycję {turn.square.col +1}x{turn.square.row +1}.
            </li>)}
        </ol>
    )
}