import './App.css';
import React from 'react';
import NavBar from './Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';


library.add(faTrash);

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      
    }
  }


render(){
    return ( 
    <Container>
      <NavBar />
    </Container>
    );
}
}

export default App;
