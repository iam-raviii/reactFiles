import React, { Component } from 'react'
import '../stylesheets/navigationcss.css'
import { Button } from 'react-bootstrap';



class Worklinks extends Component {

	render() {

		return (

			<div className='fluid-container' id='employeeContainerId'>
				<p id='employeeNameId'>Hello Employee</p>
	
				<p className='employeeTitle'>Bids Repoter</p>
				<p className='employeeTitle'>Entity Editor</p>
				<p className='employeeTitle'>Researcher</p>
				<br/>
				<p id='introId'>This is the <b>BEDROCK</b>. This is your Workstation.</p>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-4 workLinks'>
						<Button bsStyle='info' className='workButtons'>WDS</Button>
						<p className='workTitle'>Work Distribution System</p>
						</div>
						<div className='col-sm-4 workLinks'>
						<Button bsStyle='info' className='workButtons'>ADR</Button>
						<p className='workTitle'>Auto Data Request System</p>
						</div>
						<div className='col-sm-4 workLinks'>
						<Button bsStyle='info' className='workButtons'>CTS</Button>
						<p className='workTitle'>Call Tracking System</p>
						</div>
					</div>
				</div>
			
			</div>
		);
	}
}

export default Worklinks;