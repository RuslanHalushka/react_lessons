import React, {Component} from 'react';
import User from "../user/User";

class AllUsers extends Component {
    state = {users: [], chosenUser: null};

    selectUser = (id) =>{
        let {users} = this.state;
        let find = users.find(value => value.id === id);
        this.setState({chosenUser: find})
    }


    render() {
        let {users, chosenUser} = this.state;

        return (
            <div>
                {
                    users.map(user => <User item ={user} key = {user.id} selectUser = {this.selectUser}/>)
                }
                {
                    chosenUser && <h3>{chosenUser.id} - {chosenUser.name}</h3>
                }
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users =>{
                this.setState({users})
            })
    }
}

export default AllUsers;
