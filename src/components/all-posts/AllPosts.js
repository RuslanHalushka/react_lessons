import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {allPosts: [], chosenPost: null};

    onSelectPost =(id)=>{
        let {allPosts} = this.state;
        let finderPost = allPosts.find(post => post.id === id)
        this.setState({chosenPost: finderPost});
    }

    render() {
        let {allPosts, chosenPost} = this.state;
        return (
            <div>
                {
                    allPosts.map(post =><Post item = {post} key = {post.id} onSelectPost = {this.onSelectPost}/>)
                }
                {
                    chosenPost && <h3>{chosenPost.id} - {chosenPost.title}</h3>
                }
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({allPosts: posts})
            })
    }
}

export default AllPosts;
