import Player from "./Player"
import randomIcon from "../helpers/playerManagement"
export default function Game(props) {
    function handleDeal() {
      const turn = props.turn
      // pass what turn it is from props
      if(turn = 0) {
        // deal 7 cards to each player
      } else {
        // deal 1 card to each player except active player
      }
    }
    const players = props.players
  return (<>
  <h2>Game</h2>
  <button onClick = {props.handleClick}>New Game</button>
  <button onClick = {handleDeal}>Deal</button>
  {players.forEach(player => {
    <Player name={player} icon ={randomIcon} />   
  })
  }
  </>)
}