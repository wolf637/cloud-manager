import React, { Component } from 'react';
import VM from './VM';

export default class VMList extends Component {
  render() {
    let vmList = []
    for(let i=0; i<4; i++){
      vmList.push(<VM />)
    }

    let lstStyle = { display: "flex",
                     flexFlow: "row wrap",
                     alignContent: "space-between",
                     justifyContent: "space-between"}
    return (
        <div className="container"  style={lstStyle}>
           <div className="card-deck mb-3 text-center">
        {vmList}
        </div>
        </div>
    );
  }
}
