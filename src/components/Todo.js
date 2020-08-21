
import { List, ListItemText,  ListItem, Modal } from '@material-ui/core';
import db from '../firebase'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import React, { Component } from 'react'
import '../App.css'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false,
        input:this.props.todo.todo }
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
    updateTodo=()=>{
        db.collection('todos').doc(this.props.todo.id).set
        ({
            todo:this.state.input
        },{merge:true})
        this.setState({open:false});
    }
    handleChange=(event)=>{
        this.setState({
            input:event.target.value
        })
    }
    render() {

        return (
            <div>
               
                <Modal className='Modal' open={this.state.open} onClose={this.handleClose} >
                    <div>
                        <h1>Update Form</h1>
                        <input type='text' value={this.state.input} onChange={this.handleChange}/>
                        <button onClick={this.updateTodo}>Edit</button>
                        <button onClick={this.handleClose}>Close</button>
                    </div>
                </Modal>

                <List>
                    <ListItem>
                        {/* <ListItemAvatar> */}
                        {/* <Avatar></Avatar> */}

                        {/* </ListItemAvatar> */}
                        <ListItemText primary={this.props.todo.todo} secondary='dummy deadline' />
                    </ListItem>
                    <button onClick={this.handleOpen}>Edit</button>
                    <DeleteForeverRoundedIcon onClick={event =>
                        db.collection('todos').doc(this.props.todo.id).delete()}>
                            DELETE ME</DeleteForeverRoundedIcon>
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
