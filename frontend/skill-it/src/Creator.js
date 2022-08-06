import React, { Component } from 'react'
import axios from 'axios'

export class Creator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         channelName: "",
         userContact: "",
         userEmail: "",
         successMessage:"",
         errorMessage: ""
      }
    }
    
    handleChannelName= (event) =>{
        this.setState({
            channelName: event.target.value
        })
    }
    handleuserContact= (event) =>{
        this.setState({
            userContact: event.target.value
        })
    }
    handleuserEmail= (event) =>{
        this.setState({
            userEmail: event.target.value
        })
    }
    handleSubmit = (e) => {
        this.addChannel()
        e.preventDefault()
    }
    addChannel = () => {
        var formData = {
            name: this.state.channelName,
            contact_number: this.state.userContact,
            email: this.state.userEmail
        }
        console.log("Data", formData);
        axios.post("http://localhost:3000/creator-registration", formData)
        .then(response => {
            console.log(response);
            this.setState({successMessage: response.data.message, errorMessage:""})
        }).catch(error => {
            this.setState({successMessage: "", errorMessage:error.message})
        })

    }
  render() {
      const {channelName,userContact,userEmail} = this.state
    return (
      <div className='container'>
          <form onSubmit={this.handleSubmit}>
              <div className='form-group mb-3 '>
                <label htmlFor="channelName" className="form-label">Channel Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Channel Name" value={channelName} onChange= {this.handleChannelName}/>
              </div>
              <div className='form-group mb-3 '>
                <label htmlFor="channelName" className="form-label">Contact Number: </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Contact Number" value={userContact} onChange= {this.handleuserContact}/>
              </div>
              <div className='form-group mb-3 '>
                <label htmlFor="channelName" className="form-label">Email: </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Email" value={userEmail} onChange= {this.handleuserEmail}/>
              </div>
              <button className='btn btn-danger' onClick={this.addChannel}>Create</button>
          </form>

      </div>
    )
  }
}

export default Creator