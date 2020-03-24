import React from 'react';
import './App.css';
import Tweet from './components/tweet';



function App() {
  return(
    <div className= "app">
  
      <Tweet name="John"  message="This a random tweet"/>
      <Tweet name="Tony"  message="I am a true king"/>
      <Tweet name="Ray"  message="700 k for real tho!"/>
      <Tweet name="Bond"  message="I love it, come an check thi!"/>
     
      
       
    </div>
  )
}

export default App;