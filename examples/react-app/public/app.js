require('./styles/normalize.css');
var ReactDOM = require('react-dom');
var React = require('react');
var MyRadio = require('./components/my-radio.jsx');
ReactDOM.render(<MyRadio/>,document.getElementById("app"));

console.log("working...");
