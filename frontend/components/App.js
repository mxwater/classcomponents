import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

let id = 0;
const getId = () => ++id;

const initialTodos = [
  { id: getId(), name: 'Walk the dog', completed: false },
  { id: getId(), name: 'Learn React', completed: true },
  { id: getId(), name: 'Have Fun', completed: false }
];

export default class App extends React.Component {
  state = {
    todos: initialTodos
  };

  addTodo = (name) => {
    this.setState ({
      ...this.state,
      todos: this.state.todos.concat({id:getId(), completed: false, name})
    })
  }

  addTodo = name => {
    const newTodo = { id: getId(), name, completed: false };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  toggleCompletion = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    }));
  };

  toggleHideCompleted = () => {
    this.setState(prevState => ({
      hideCompleted: !prevState.hideCompleted
    }));
  };



  render() {
    return (
      <div className='App'>
        
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
        
      </div>
    );
  }
}
