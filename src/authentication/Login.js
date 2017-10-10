import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import  axios from 'axios';

class Login extends Component {

	constructor(props){
		super(props);
		this.state={
			redirect: false
		}
	}

	login(){
		 axios({
		  method: 'post',
		  url: 'http://localhost:3001/login',
		  data: {
		  	email: this.email.value,
		  	password: this.password.value
		  }
		})
		 .then(function(response){
		 	console.log(response.data);
		 	return response.data;

		})
		 .then((response) => {
		 	if(response.length != 0 ){
		 			this.setState({redirect: true});	
		 	}else{
		 		alert('Invalid Username and Password');
		 	}
		 	console.log(response.length);

		 })
		 .catch(function(error) {
         console.log(error.response.data);
      });
	}

  render() {
  	// this will redirect to a specific location
  	 if (this.state.redirect === true) {
       return <Redirect to='/books'/>;
     }

	return (
    	<div>
	      <input ref={(input) => {this.email = input; }} />
	      <input type="password" ref={(input) => {this.password = input; }} />
	      <button onClick = {() => this.login() }>Login</button>
	    </div>
    );
  }
}

export default Login;
