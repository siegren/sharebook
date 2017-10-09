import React, { Component } from 'react';
import axios from 'axios';


class DonorForm extends Component {


	register(){
		// fetch("http://localhost:3001/donors", {
		//    method: "POST",
		//    // headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
		//    mode:'no-cors',
		//    body:  formData
		// })
		// .then(function(response){ 
		//  return response.text();   
		// })
		// .then(function(data){ 
		// console.log("return" + data)
		// });

		axios({
		  method: 'post',
		  url: 'http://localhost:3001/donors',
		  headers: {
	  'Access-Control-Allow-Origin': '*',
	},
		  data: {
		  	email: this.email.value,
		  	password: this.password.value,
		    name: this.name.value
		  }
		});


		this.email.value = "";
		this.password.value = "";
		this.name.value = "";
	}

  render() {
    return (
    	<div>
	      <input ref={(input) => {this.email = input; }} />
	      <input ref={(input) => {this.password = input; }} />
	      <input ref={(input) => {this.name = input; }} />
	      <button onClick = {() => this.register() }>Register</button>
	    </div>
    );
  }
}

export default DonorForm;
