import React, {useState } from 'react'

import axios from 'axios';
import Navbar from '../items/Navbar';

import React, { Component } from 'react'

export default class Register extends Component {

  state={
    name: '',
    email:'',
    password:'',
    password_confirmation:'',
    phoneNo:''
  }
 handleInput=(e)=>{
   this.setState({
     [e.target.value] : e.target.value
    } );
 }

 handleSubmit= async (e)=>{
   e.preventDefault();

   const res = await axios.post('http://localhost:8000/api/student/register',this.state);
   if(res.data.status === 200){
     console.log(res.data);
   }
 }
  render() {
    return (
      <div>
           <Navbar />
                

                <div class="row">
                <form class="col s12" onSubmit={handleSubmit}>
            
                  <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">account_box</i>
                      <input id="icon_prefix" type="text" className="validate" name="name" onChange={this.handleInput}/>
                      <label for="icon_prefix" >Full Name</label>
                    </div>
                    <div class="input-field col s6">
                    <i class="material-icons prefix">mail</i>
                      <input id="email" type="text" className="validate" name="email"  onChange={this.handleInput}/>
                      <label for="email">Email</label>
                    </div>
                  </div>
            
                  <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">password</i>
                      <input id="password" type="password" className="validate" name="password"  onChange={this.handleInput} />
                      <label for="password">Password</label>
                    </div>
                    <div class="input-field col s6">
                    <i class="material-icons prefix">password</i>
                      <input id="password_confirmation" type="password" className="validate" name="password_confirmation"  onChange={this.handleInput}/>
                      <label for="password_confirmation">Password Confirmation</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">phone_in_talk</i>
                      <input id="phoneNo" type="tel" className="validate" name="phoneNo"  onChange={this.handleInput}/>
                      <label for="phoneNo">Contact Number</label>
                    </div>
            
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
                    
                </form>
              </div>
      </div>
    )
  }
}
