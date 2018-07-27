import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faPowerOff, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
  
  render() {
    return (
      
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        SkyTap VM Manager
       </a>
      </nav>
      
      )
  }
}


class VM extends React.Component {
  
  handleClick() {
      console.log('this is:', this);
    }
  
  render() {
    
    
    
    return (
      <div className="card mb-4 box-shadow" style={{width: "18rem"}}>
        <img src="imac_black.png" alt="VM"></img>
      <div className="card-body">
      <h5 className="card-title">VM Name:</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn"><FontAwesomeIcon icon={faPlay} /></a>
    <a href="#" className="btn"><FontAwesomeIcon icon={faPause} /></a>
    <a href="#" className="btn"><FontAwesomeIcon icon={faPowerOff} /></a>
    <a href="#" className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrashAlt} /></a>
  </div>
</div>
    );
  }
}


class VMS extends React.Component {
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


class VMManager extends React.Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <VMS />
      </div>
      )
  }
  
}


class JumboTron extends React.Component {
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



ReactDOM.render(
  <VMManager />,
  document.getElementById('root')
);

