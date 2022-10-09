import React, {Component} from 'react';
import {users} from "./database/usersDB";
import UserComponents from "./components/user/UserComponents";

class App extends Component {
    render() {
        return (
            <div>
                {
                    users.map((user, index) => {
                        let clsX = index % 2 ? 'blue' : 'pink'
                        return (
                            <UserComponents
                                item = {user}
                                cls = {clsX}
                                key = {index}/>
                                )

                    })
                }
            </div>
        );
    }
}

export default App;
