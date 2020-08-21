
import './App.css';
import React, { Component } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './components/Todo'
import db from './firebase';
import firebase from 'firebase'
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      todos: [],
      input: '',


    }
  }
  componentDidMount() {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
     this.setState({ todos:snapshot.docs.map(doc=>({id:doc.id ,todo:doc.data().todo}))
    })
  }
    )}
  addTodos = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo :this.state.input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // console.log(this.state.input)
    this.setState({ todos: [...this.state.todos, this.state.input], input: '' })
  
  }
  handleInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  render() {
    return (
      <div>
        <h1>Todoist</h1>
        <form>
          <FormControl>
            <InputLabel>Write a todo</InputLabel>
            <Input type='text' value={this.state.input}
              onChange={this.handleInputChange} />
          </FormControl>
          {/* <input type='text' value={this.state.input}
      onChange={this.handleInputChange}/> */}
          <Button disabled={!this.state.input} type='submit' onClick={this.addTodos} variant="contained" color="secondary">
            Add Todo
    </Button>
          {/* <button onClick={this.addTodos}>Add Todo</button> */}
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (

            <Todo todo={todo} key={index} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App

