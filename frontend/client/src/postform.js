import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class postform extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            showForm: false
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/users',this.state)
        alert(this.state.name)
        this.props.history.push("/postlist")
    }

    showForm = () => {
        const { name } = this.state
        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}> 
         <form id= "add-app" onSubmit={this.submitHandler}>
     
              <label for="name">Project Name: </label>
              &nbsp;&nbsp;
              <input type="text" placeholder="Enter Project name" name="name" value={name} onChange={this.changeHandler}/>
              &nbsp;&nbsp;&nbsp;
              <button type="submit">Create</button>
           </form>
           </div>
          );
      }

    render(){
        
        return(
<div>
<h1>Manage Projects</h1>
        <button  onClick={() => this.setState({showForm: true}) }>Add New Project</button>
        {this.state.showForm ? this.showForm() : null}
            
            </div>
        )
    }
}

export default withRouter(postform);