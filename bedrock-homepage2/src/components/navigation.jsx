import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import '../stylesheets/navigationcss.css'




class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect id='navbarId'>
  			<Navbar.Header>
    		<Navbar.Brand>
      			<a class='menuItem' href="#brand">Home</a>
    		</Navbar.Brand>
   			<Navbar.Toggle />
  			</Navbar.Header>
  			<Navbar.Collapse>
    			<Nav>
      				<NavItem eventKey={1} href="#" class='menuItem'>
        				Manual
      				</NavItem>
      				<NavItem eventKey={2} href="#" class='menuItem'>
        				Message System
      				</NavItem>
      				<NavDropdown inverse class='menuItem' eventKey={3} title="Menu" id="basic-nav-dropdown">
        				<MenuItem id='dropdownItem'>Knowledge Base</MenuItem>
        				<MenuItem id='dropdownItem'>Employee Directory</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.3}>Researchers Stats</MenuItem>
        				<MenuItem divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>Reminder</MenuItem>
        				<MenuItem divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>Training - Entity Add</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.3}>Training - Solicitation Add</MenuItem>
        				<MenuItem id='dropdownItem' divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>Report Menu</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.3}>Report Menu Detail</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.3}>Central Lookup</MenuItem>
        				<MenuItem id='dropdownItem' divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>Search for owners with no phone</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.3}>Search for owners with no websites</MenuItem>
        				<MenuItem id='dropdownItem' divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>WDS Source Assignment</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.3}>WDS Link Errors</MenuItem>
        				<MenuItem divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>Terms and Conditions</MenuItem>



      				</NavDropdown>
      				<NavDropdown class='menuItem' eventKey={3} title="Solicitation" id="basic-nav-dropdown">
        				<MenuItem id='dropdownItem' eventKey={3.1}>Solicitation Add</MenuItem>
        				<MenuItem id='dropdownItem' eventKey={3.2}>Solicitation Edit</MenuItem>
        				<MenuItem eventKey={3.3}></MenuItem>
        				<MenuItem divider />
        				<MenuItem id='dropdownItem' eventKey={3.3}>Entity Search/Edit</MenuItem>
      				</NavDropdown>
    			</Nav>
    		<Nav pullRight>
      			<NavItem eventKey={1} href="#" class='menuItem'>
        			Fax Manager #5
      			</NavItem>
      			<NavItem eventKey={2} href="#" class='menuItem'>
        			Log Out
      			</NavItem>
    		</Nav>
  			</Navbar.Collapse>
		</Navbar>
      </div>
    );
  }
}

export default Navigation;
