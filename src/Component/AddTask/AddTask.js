import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './addTask.module.css'

class AddTask extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className={styles.addtask}>
            <input type="text" name='add_task' placeholder='add a task' autoComplete='off' onKeyPress={this.props.handleSubmit}></input>
            </div>
        )
    }
}

export default AddTask;