import React, { Component } from 'react';
import axios from 'axios';


class BookForm extends Component {


	new_book(){
	// 	axios({
	// 	  method: 'post',
	// 	  url: 'http://localhost:3001/donors',
	// 	  headers: {
	//   'Access-Control-Allow-Origin': '*',
	// },
	// 	  data: {
	// 	  	email: this.email.value,
	// 	  	password: this.password.value,
	// 	    name: this.name.value
	// 	  }
	// 	});


	// 	this.email.value = "";
	// 	this.password.value = "";
	// 	this.name.value = "";
	}

  render() {
    return (
    	<div>
	      <input ref={(input) => {this.title = input; }} />
	      <input ref={(input) => {this.author = input; }} />
	      <input ref={(input) => {this.location = input; }} />
	      <input  value=/>
	      <button onClick = {() => this.register() }>Register</button>
	    </div>
    );
  }
}

export default BookForm;
