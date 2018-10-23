import React, { Component } from 'react'
import '../stylesheets/navigationcss.css'
import { Button } from 'react-bootstrap';


class Welcome extends Component {
  	

	getDateNow(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();

		if(dd < 10){
			dd = '0' + dd;
		}

		if(mm < 10){
			mm = '0' + mm;
		}

		today = mm + '/' + dd + '/' +  yyyy;
		return today;
	};

	

  render() {
	   
	const welcome = 'Employee'

    return (
      <div id='welcomeDivId'>
      	<div className='fluid-container' id="welcomeContainerId">
      		<div className='row'>
      		<div className='col-sm-12'>
      		<h1 id='welcomeId'>Welcome To Your Office</h1>   	
  	   	
      		<p id='dateId'>Today's Date : {this.getDateNow()}</p>
      		</div>
      		</div>
      	</div>
      	{/*Employee component */}
      	
      </div>
    );
  }
}

export default Welcome;
