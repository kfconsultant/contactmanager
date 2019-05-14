import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-6">About Contact Manager</h1>
        <p className="lead">
          Simple manage contacts app using React with Context API
        </p>
        <p className="text-secondary">1.0.0</p>
        <p>React Version: {React.version}</p>
        <p>Created by: Kelvin F (61920)</p>
      </div>
    );
  }
}
