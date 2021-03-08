// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import styled from "styled-components";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <List>
          {this.props.todos.map((todo) => {
            return (
              <li
                onClick={(e) => {
                  this.props.toggleCompleted(todo.id);
                }}
                className={`${todo.completed && "completed"}`}
                key={todo.id}
              >
                {todo.task}
              </li>
            );
          })}
        </List>
        <button onClick={this.props.clearCompleted}>clear completed</button>
      </>
    );
  }
}

export default TodoList;

const List = styled.ul`
  .completed {
    text-decoration: line-through;
  }

  li {
    cursor: pointer;
  }
`;
