import React, { useState } from 'react';
import './App.css';
import Tweet from './components/tweet';



function App() {
  const [users, setUsers] = useState([
    {name: "Eden", message: "Hello there"},
    {name: "Paul", message: "I am Paul"},
    {name: "Hill", message: "Bingo!"}
  ]);
  
    
  return(
    <div className= "app">
      {users.map(user => (<Tweet name={user.name} message={user.message} />
      ))}

  </div>
  )
}

export default App;