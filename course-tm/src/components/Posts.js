import React, { Component } from 'react'

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({posts: data}))
    }

    render() {
        const postItem = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                <hr />
            </div>
            ));

        return (
            <div>
                <h1>Posts</h1>
                { postItem }  
            </div>
        )
    }
}

export default Posts