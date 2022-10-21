import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import Login from './components/Login';
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function App() {
  const [username, setUsername] = useState('');

  const [players, setPlayers] = useState([]);
  
    function handleChange(e) {
      e.preventDefault()
      // console.log(e.target.value)
      setUsername(e.target.value)
    }
    function handleSubmit(e) {
      e.preventDefault()
      setPlayers([...players, username])
      
      cookies.set('Username', username)
      // console.log(newUser)
      console.log(players)
      // console.log(cookies.get('Username'))
    }
    function handleClick(e) {
      e.preventDefault()
      cookies.remove('Username')
      console.log('clicked')
      window.location.reload(false)
      
    }
  

  

  return (
    <div className="App">
      <Header username={cookies.get('Username')} />
      {cookies.get('Username') ? <Game handleClick={handleClick} players={players} /> : <Login handleChange={handleChange} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
