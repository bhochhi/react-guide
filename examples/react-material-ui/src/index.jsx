import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import App from '../containers/App';
import configureStore from '../store/configureStore';
import Routes from '../components/Routes';
//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={hashHistory} >
         {Routes}       <App />
  
      </Router>    
    </Provider>  
  </MuiThemeProvider>,
  document.getElementById("root")
);
