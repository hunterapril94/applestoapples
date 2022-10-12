import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import Login from './components/Login';
import { useCookies } from "react-cookie";
import { useState } from "react";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['username'])
  const [username, setUsername] = useState('');
  function handleChange(e) {
    setUsername(e.target.value)
  }
  function handleSubmit(e) {
    setCookie('Username', username, { path: '/' })
    window.location.reload()
    console.log(cookies)
  }
  function handleClick() {
    removeCookie(['Username'])
    console.log('clicked')
    window.location.reload()

  }

  return (
    <div className="App">
      <Header username={cookies.Username} />
      {cookies.Username ? <Game handleClick={handleClick} /> : <Login handleChange={handleChange} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
