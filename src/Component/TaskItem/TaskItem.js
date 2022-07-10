import React, { Component } from "react";
import styles from './taskItem.module.css'
class TaskItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        this.props.handleStrikeThrough(this.props.taskItem);
    }
  

    render(){    
        return(
            <div className={styles.task} onClick={this.handleClick}>
                <div className={styles.outerCircle} onClick={this.handleClick}>
                    <div  className = {`${!this.props.taskItem.active?styles.circle+" "+styles.gradientCheckBox:styles.circle}`} id={'striker'} ></div>
                </div>
                <p id={this.props.taskItem.id} className = {`${!this.props.taskItem.active?styles.strikethrough:''}`}>{this.props.taskItem.task}</p> 
            </div>   
        )      
    }
}

export default TaskItem;
