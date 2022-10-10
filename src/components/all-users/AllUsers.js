import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "../user/User";

class AllUsers extends Component {

    userService = new UserService()
    state = {users: [], someUser: null}

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }

    chosenOne = (id) => {
        this.userService.getOneUser(id).then(value => this.setState({someUser: value}))
    }

    render() {
        let {users, someUser} = this.state;
        return (
            <div>
                {
                    users.map(user => <User item = {user} key = {user.id} chosenOne = {this.chosenOne}/>)
                }
                {
                    someUser && <h3>{someUser.id} - {someUser.name}</h3>
                }
            </div>
        );
    }
}

export default AllUsers;
