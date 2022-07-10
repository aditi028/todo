import './App.css';
import AddTask from './Component/AddTask/AddTask'
import TaskList from './Component/TaskList/TaskList';
import { Component } from 'react';
import {tasks} from './task.data'

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      tasks: tasks,
      id_counter: 5,
      active: 5,
      selected: 'All'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStrikeThrough = this.handleStrikeThrough.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleTodoCount = this.handleTodoCount.bind(this);
    
  }

handleTodoCount(array){
  const count = array.reduce(
    (previousValue, currentValue) => (
      currentValue.active?
      previousValue + 1:
      previousValue
    ),
    0
  );
  this.setState({active:count})
}

handleSelected(event){
  this.setState((prevState)=>({...prevState,selected : event.target.innerText}));
}

handleClearCompleted(event){
  let array = this.state.tasks;
  const newState = array.filter(
    task => task.active
  )
  this.setState({tasks:[...newState]})
}

handleStrikeThrough(target){
  let array = this.state.tasks;
  array= array.map( (item) => {
    if(item.id===target.id){
      return {...item,active:!item.active} 
    }
    else{
      return {...item}
    }
  }
  )    
  this.setState({tasks:[...array]}, this.handleTodoCount(array))
}
  
handleSubmit(event){
    if(event.key=='Enter'){
        let target = event.target;
        this.setState(prevState => ({
          tasks: [...prevState.tasks, {id:prevState['id_counter']+1, task:target.value, active:true}],
          id_counter : prevState['id_counter']+1,
          active:prevState.active + 1
        }))
    }
}

  render(){
    return (
      <div className="App">
        <div className="apptitle"><strong>TODO</strong></div>
        <AddTask handleSubmit={this.handleSubmit}/>
        <div className='holder'>
          <div className="task-wrapper">
            <TaskList selected={this.state.selected} tasks={this.state.tasks}  handleStrikeThrough = {this.handleStrikeThrough}/>
          </div>
        </div>
        <div className="menu">
          <div className="itemsLeft"><span>{this.state.active}</span> items left</div>
          <div className="centralMenu">
              <div onClick={this.handleSelected}>
                <span id='all' className={this.state.selected==='All'?'selectMenu':''}>All</span>
              </div>
              <div onClick={this.handleSelected}> 
                <span id='active' className={this.state.selected==='Active'?'selectMenu':''}>Active</span>
              </div>
              <div onClick={this.handleSelected}>
                <span id='completed' className={this.state.selected==='Completed'?'selectMenu':''}>Completed</span>
              </div>
          </div>
          <div className="clearCompleted" onClick= {this.handleClearCompleted}>clear completed</div>
        </div>
      </div>
    );
  }
}

export default App;
