import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-post/AllPosts";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to = {'/users'}>users</Link>
                    </div>
                    <div>
                        <Link to = {'/posts'}>posts</Link>
                    </div>

                    <Routes>
                        <Route path={'/users'} element={<AllUsers/>}/>

                        <Route path={'/posts'} element={<AllPosts/>}/>
                    </Routes>

                </div>
            </Router>
        );
    }
}

export default App;
