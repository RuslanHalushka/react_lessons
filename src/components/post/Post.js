import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, onSelectPost} = this.props;
        return (
            <div>
                <div>{item.id}, {item.title}</div>
                <button onClick={()=> onSelectPost(item.id)}>Click me</button>
            </div>
        );
    }
}

export default Post;
