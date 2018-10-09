import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faPowerOff, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

export default class VM extends Component {

  handleClick() {
      console.log('this is:', this);
    }

  render() {
    return (
      <div className="card mb-4 box-shadow" style={{width: "18rem"}}>
        <img src="imac_black.png" alt="VM"></img>
        <div className="card-body">
          <h5 className="card-title">VM Name:</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
          <a href="#" className="btn"><FontAwesomeIcon icon={faPlay} /></a>
          <a href="#" className="btn"><FontAwesomeIcon icon={faPause} /></a>
          <a href="#" className="btn"><FontAwesomeIcon icon={faPowerOff} /></a>
          <a href="#" className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrashAlt} /></a>
        </div>
      </div>
    );
  }
}
