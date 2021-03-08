import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = { textValue: "" };
  }

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.textValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.textValue}
        />
        <button>add</button>
      </form>
    );
  }
}

export default TodoForm;
