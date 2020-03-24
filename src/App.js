import React from 'react';
import './App.css';
import Profiles from './components/profiles'
import Name from './components/name';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      top_profiles: [
        { name: 'Pit', age: 26, bio: 'is a mechanic'},
        { name: 'Dan', age: 36, bio: 'is a  musician'},
        { name: 'Peter', age: 33, bio: 'is a preacher'},
      ],
      other_profiles: [
        { name: 'Profile 1', age: 33, bio: 'is a prof 1' },
        { name: 'Profile 2', age: 33, bio: 'is a prof 2' },
        { name: 'Profile 3', age: 33, bio: 'is a prof 3' },
        { name: 'Profile 4', age: 33, bio: 'is a prof 4' },
        { name: 'Profile 5', age: 33, bio: 'is a prof 5' },
      ]
    };

  }
    render(){
      return(
  <div>
    <h3>Top Profiles</h3>
    {this.state.top_profiles.map(profile => <Profiles profile={profile} />)}

      <h3> Other Profiles</h3>
          {this.state.other_profiles.map(profile => <Profiles profile={profile} />)}
          
    
      

  </div>
      )
    }
}

export default App;


