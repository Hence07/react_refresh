import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      item_input: ' ',
      items: [ ]

    };
    this.update = this.update.bind(this);
    this.add = this.add.bind(this);
  }
  update(event){
    this.setState({
      item_input: event.target.value
    });
  }
  add(){
    this.setState(prev =>{
      return{
        item_input: ' ',
        items: prev.items.concat(prev.item_input)
      };
    });

  }

render() {
  return(
    <div>
      <h4>todo list</h4>
      <ul>
      {
         this.state.items.map((item, i) =>(
         <li>{item}</li>
        ) )
      }
      </ul>
      <input type="text" value={this.state.item_input}  onChange= {this.update} />
      <button type="button" onClick={this.add}>add item</button>
      </div>
  );
}
}

export default App;
