import React, { Component,createRef } from 'react'
import TaskItem from '../TaskItem/TaskItem';
class TaskList extends Component{

    constructor(props){
        super(props);
    }
    
    render(){     
        let tasks = [...this.props.tasks];
        if(this.props.selected==='Active'){
            tasks = [...tasks.filter(task=>task.active)]
        }
        else if(this.props.selected==='Completed'){
            tasks = [...tasks.filter(task=>!task.active)]
        }
        return(
           <div className='taskList'>
           {
            tasks.map((task,index)=>
            (<TaskItem key={index} taskItem={task} handleStrikeThrough={this.props.handleStrikeThrough}/>)
            ) 
           }
           </div>          
        )     
    }
}

export default TaskList;