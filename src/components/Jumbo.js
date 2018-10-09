import React, { Component } from 'react';

export default class Jumbo extends Component {
    render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hi, USER</h1>
          <p className="lead">Welcome to SkyTap VM manager. You can start, suspend, shutdown or delete your VMs here</p>
        </div>
      </div>
      )
  }
}
