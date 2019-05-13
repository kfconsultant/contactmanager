import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-6">About Contact Manager</h1>
        <p className="lead">Simple app to manage contacts</p>
        <p className="text-secondary">1.0.0</p>
        <p>React Version: {React.version}</p>
      </div>
    );
  }
}
