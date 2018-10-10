import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import CloudManagerApp from './reducers';
import thunkMidleware from 'redux-thunk';



// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/NavBar';
// import VMList from './components/VMList';
// import Jumbo from './components/Jumbo';
// import EnvList from './components/env_list';





let createStoreWithMiddleware = applyMiddleware(thunkMidleware)(createStore)

let store = createStoreWithMiddleware(CloudManagerApp)

class CloudManager extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
      )
  }
}

ReactDOM.render(
  <CloudManager />,
  document.getElementById('root')
);
