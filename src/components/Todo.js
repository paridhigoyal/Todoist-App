
import { List, ListItemText, ListItem, Modal } from '@material-ui/core';
import db from '../firebase'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { Button, Input } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { Component } from 'react'
import '../App.css'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            input: this.props.todo.todo
        }
    }
    handleOpen = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    updateTodo = () => {
        db.collection('todos').doc(this.props.todo.id).set
            ({
                todo: this.state.input
            }, { merge: true })
        this.setState({ open: false });
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    render() {

        return (
            <div className='div'>

                <Modal className='Modal' open={this.state.open} onClose={this.handleClose} >
                    <div className='div'>

                        <h1>Update Form</h1>
                        <Input type='text' value={this.state.input} onChange={this.handleChange} className='Input' />
                        <Button onClick={this.updateTodo} variant="contained" color="secondary">Edit</Button>
                        <Button onClick={this.handleClose} variant="contained" color="secondary">Close</Button>
                    </div>
                </Modal>

                <List>
                    <ListItem>

                        <ListItemText primary={this.props.todo.todo} secondary='dummy deadline' />
                    </ListItem>
                    <EditIcon onClick={this.handleOpen} variant="contained" color="secondary" />
                    <DeleteForeverRoundedIcon onClick={event =>
                        db.collection('todos').doc(this.props.todo.id).delete()} variant="contained" color="secondary" />

                    {/* <Button disabled={!this.state.input} type='submit' onClick={this.addTodos} variant="contained" color="secondary">
                        Add Todo
                    </Button> */}
                </List>
                {/* <li >{props.text}</li>  */}
            </div>
        )
    }
}

export default Todo
