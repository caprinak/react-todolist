import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import './App.css';
import Header from './layout/Header';
//import uuid from 'uuid';

class App  extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "play guitar",
        completed : false
      },
      {
        id: 2,
        title: "learn japanese",
        completed : true
      },
      {
        id: 3,
        title: "build new web app",
        completed : false
      }
    ]
  }
// Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  //delete Todo
  delTodo =(id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  //Add Todo
  addTodo= (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render(){

  return (
    <Router>
    <div className="App">
    <div className="container">
      <Header/>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      </div>  
    </div>
    </Router>
  );
  }
}

export default App;
