import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "complete MVP",
          id: 1,
          completed: true,
        },
        {
          task: "add style",
          id: 2,
          completed: false,
        },
      ],
    };
  }

  toggleCompleted = (clickedOnId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === clickedOnId) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    });
  };

  addTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
