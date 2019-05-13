import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    completed: ""
  };

  componentDidMount() {
    console.log("componentDidMount!!");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          completed: data.completed
        })
      )
      .then(data => console.log(this.state));
  }

  componentWillMount() {
    console.log("component Will Mount!!");
  }

  componentWillUpdate() {
    console.log("component Will Mount!!");
  }

  render() {
    const { title, completed } = this.state;

    return (
      <div>
        <h1>Test Component</h1>
        <p>Title: {title}</p>
        <p>Completed: {completed.toString()}</p>
      </div>
    );
  }
}

export default Test;
