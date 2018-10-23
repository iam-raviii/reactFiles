import React, { Component } from 'react';
import '../stylesheets/logincss.css'

class Login extends Component {
  render() {
    return (
     	<div id='wholeDiv'>
     		<div>
     			<h1>Bid <b>O</b>cean</h1>
     		</div>
       		<div id='mainDiv'>
        		<p id='welcome'>Welcome</p>
        		<input class='inputText' type='text' name='username' placeholder='user name' /> <br/>
        		<input class='inputText' type='password' name='password' placeholder='password' /> <br/>
        		<input class='login' type='submit' name='submit' value='Login' />
        	</div>
      </div>
    );
  }
}

export default Login;
