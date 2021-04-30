import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Todo from './Todo';
import UserList from "./UserList";


class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "unauthorized",
      user: {}
    }

  }

  handleLogin = () => {
    this.setState({
      loggedInStatus:"loggedin"
    });
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus:"unauthorized"
    });
  }

  render(){
  
    return (
      <Router>

          <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/users"> Users </Nav.Link>
                  <Nav.Link as={Link} to="/todo"> ToDo </Nav.Link>
                  { this.state.loggedInStatus === "unauthorized" ?
                    <Nav.Link as={Link} to="/login"> Login </Nav.Link> : 
                    <Nav.Link onClick={this.handleLogout}> Logout </Nav.Link>
                  } 
              </Nav>
          </Navbar.Collapse>
          </Navbar>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route 
            path="/login"
            render={ props => (
              <Login handleLogin={this.handleLogin} {...props} loggedInStatus={this.state.loggedInStatus} />
            )}
            />

            <Route 
            path="/todo" 
            render={ props => (
              <Todo {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}
            />
            <Route 
            path="/users"
            render={ props => (
              <UserList {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}
            />
           
          </Switch>

      </Router>
    );
  }
}

export default NavBar;


