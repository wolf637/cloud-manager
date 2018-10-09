import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import VMList from './components/VMList';
import Jumbo from './components/Jumbo';
import EnvList from './components/env_list';

class VMManager extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />
        <EnvList />
      </div>
      )
  }
}

ReactDOM.render(
  <VMManager />,
  document.getElementById('root')
);
