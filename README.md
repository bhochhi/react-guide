###Demo
Trying to answer following questions through some codebase examples
* How to use React in its simplest form?
* Why use React?
* What's virtual DOM?
* How React is different from Angularjs in term of how they updates the view?
* ES5 or ES6 for React?
* What's flux and how to incorporate with React?
* Redux? Reflux? what's going on?
* Best Practices while building applications using React+XXX


#####[Simple React](https://github.com/bhochhi/react-guide/tree/master/examples/simple-react)
This is to show how simply you can extends the html using just react. The directives are written in JSX and transformed to js in browser using babel.

#####[React rendering view when data changes](https://github.com/bhochhi/react-guide/tree/v-input-update)
This demonstrates, how you can change the value in the input and gets the updated data printed in the screen(re-render), just like how ng-model in angularjs does. The concept is very similar to classic HTML where you bind the event listener in your input tag, like onChange event, which triggle and execute the function that updates the value. In vanilla js, you find the dom and update the text, but in React the value is bind to state of the component, so when state value changes, it re-renders the view.

#####[Not using jsx in client side](https://github.com/bhochhi/react-guide/tree/v-offline-transformation)
This demonstrates how to transcompile your jsx into js and browser doesn't deal with jsx at runtime.

#####Transcompiling from commandline (offline Transformation)
In production, You may better want to just load transcompiled js and handle all transcompiling in server. Simple way without using any build system is just using babel-cli.
 * you have jsx file to transform
 
 ```js
 //App component: app.jsx
 var App = React.createClass({
  render:function(){
    return (<h1>Hello world!!</h2>)
  }
 });
 ```
 * you have installed  _react_, _react-dom_, _babel-preset-react_ and _babel-cli_    
 ```npm install react react-dom babel-preset-react babel-cli```
 * Run command:
 
 ```babel --presets react app.jsx```

This should transform the jsx into javascript and show you the result on console. If you want to dump the trasformed file into folder or into file, please check out the link:[babel-cli](https://babeljs.io/docs/usage/cli/)


######[react with webpack]() 
[ref](http://survivejs.com/webpack/introduction/)

######[

https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
