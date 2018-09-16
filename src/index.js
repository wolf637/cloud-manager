import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import VMList from './VMList';
import Jumbo from './Jumbo';

class VMManager extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />
        <VMList />
      </div>
      )
  }
}

ReactDOM.render(
  <VMManager />,
  document.getElementById('root')
);
