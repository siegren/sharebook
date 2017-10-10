import React, { Component } from 'react';
import DonorForm from '../donor/DonorForm';
import { Link, Redirect } from 'react-router-dom';
import Login from '../authentication/Login.js';



class Home extends Component {

	constructor(props){
		super(props);
		this.state={
			redirect: false
		}
	}

	gotoLink(){
		 this.setState({redirect: true});
	}

  render() {
  	// this will redirect to a specific location
  	 if (this.state.redirect) {
       return <Redirect to='/about'/>;
     }

    return (
    	<div>
    <button onClick = {() => this.gotoLink() }>sample</button>
    		<Link to='/about' >About</Link>
	      <Login />
	    </div>
    );
  }
}

export default Home;
