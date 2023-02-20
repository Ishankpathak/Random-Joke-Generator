import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [joke, setJoke] = useState('');
  const [clicked , setclicked] = useState(false)

  function handleClick(){
    setclicked(true)
  }

  useEffect(() => {
    if(clicked){
      fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(jsonData => setJoke(jsonData.value))
      setclicked(false)
  }},[clicked]);

  return (
    <div className="App">
       <h3 className='heading'>Random Jokes</h3>
      <div className='joke'>
       <h5>{joke}😅</h5>
      </div>

      <div className='btn' >
       <button onClick={handleClick} className='button' >Get a new joke</button>
      </div>
    </div>
  );
}

export default App;
