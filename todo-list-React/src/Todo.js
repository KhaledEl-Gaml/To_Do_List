import './App.css';
import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';


library.add(faTrash);

class Todo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text : '',
        key : '',
        done: false
      }
    };
  }

  componentDidMount(){
    if(localStorage["todo"]){
    let todo = JSON.parse(localStorage["todo"])
    
    this.setState({items:todo})
    }
  }


  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        done: false
      }
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!== ""){
      const newItems = [...this.state.items, newItem];

      this.setState({
        items: newItems,
        currentItem:{
          text: '',
          key: '',
          done:false
        }
      });

      console.log('---------------------')
      console.log(this.state.items);

    }
    console.log('=====================')
    console.log(this.state.items);

    this.saveToDoToLocalStorage();

  }

  deleteItem = (key) => {

    console.log('item deleted!!');
    const filteredItem = this.state.items.filter(item => 
        item.key !== key);
      
    this.setState({
      items: filteredItem
    });

    this.saveToDoToLocalStorage();

  }

  updateItem = (text, key) => {
    const items = this.state.items;
    items.map( item => {
      if( item.key === key){
        item.text = text;
      }
    });

    this.setState({
      items : items
    });

    this.saveToDoToLocalStorage();

  }

  

  saveToDoToLocalStorage=(items)=>{
    localStorage["todo"] = JSON.stringify(this.state.items);
  }

  render(){

    if( this.props.loggedInStatus === "unauthorized" ){
      return (<Alert variant="">
        <Alert.Heading>Unauthorized</Alert.Heading>
        
        
        </Alert>);
    }else{
      
    return(

      <div className="container">

        <div className="App">
          <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input type="text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
            />
            <button type="submit" >Add</button>
          </form>
        </header>
          <ListItems 
          items={this.state.items}  
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          saveToDoToLocalStorage={this.saveToDoToLocalStorage}
          />
        </div>
      </div>
    );
  }
}
}


export default Todo;
