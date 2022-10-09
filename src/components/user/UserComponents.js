import React, {Component} from 'react';
import './User.css'

class UserComponents extends Component {
    render() {
        let {item, cls} = this.props;
        return (
            <div>
                <div className={cls}>{item.name} - {item.age} - {item.status.toString()}</div>
            </div>
        );
    }
}

export default UserComponents;
