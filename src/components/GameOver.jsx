export default function GameOver({winner, onRestart}) {
    return (
    <div id="game-over">
        <h2>To koniec!</h2>
        {winner && <p> Wygrywa {winner}! <br /> Uszanowanko!</p>}
        {!winner && <p>Nikt nie wygrywa...</p>}
        <p><button onClick={onRestart}>Jeszcze raz!</ button></p>
    </div>
    )
}