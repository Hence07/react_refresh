import React from 'react';
import Name from './name';


class Profiles extends React.Component {

    render() {
        return (
            <div>
                    <img src="https://picsum.photos/200/200?random=1" />
                    <Name name={this.props.profile.name} />
                    <p>
                        age: {this.props.profile.age}
                        <br />
          bio: {this.props.profile.bio}
                    </p>
                
            </div>
        );
    }
}
export default Profiles;