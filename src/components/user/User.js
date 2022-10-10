import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, chosenOne} = this.props;
        return (
            <div>
                <div>{item.id} - {item.name}</div>
                <button onClick={() => {chosenOne(item.id)}}>choose</button>
            </div>
        );
    }
}

export default User;
