import React, { Component } from 'react'
import axios from 'axios'

class postlist extends Component {
    constructor(props){
        super(props)

        this.state = {
           posts: []
        }
    }

    componentWillMount(){
        axios.get('http://localhost:3000/users/')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    
    }

    submitHandler = e => {
        this.props.history.push("/postform")
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                <h1>List of users</h1> 
                {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.name}</div>) :
                null
                }
                 <button onClick={this.submitHandler}>Home</button>
            </div>
            
        )
    }
}

export default postlist;