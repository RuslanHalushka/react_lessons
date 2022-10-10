import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, selectUser} = this.props
        return (
            <div>
                <div>{item.id} - {item.name}</div>
                <button onClick ={() => selectUser(item.id)}>choose</button>
            </div>
        );
    }
}

export default User;
