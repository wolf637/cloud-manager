import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import Jumbo from '../components/Jumbo';



export default class App extends Component{

  render(){
    return(
      <div>
        <NavBar />
        <Jumbo />
      </div>
    )
  }
}
