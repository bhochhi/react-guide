Following example projects are built progressively as we move further down.


##### [Simple React](https://github.com/bhochhi/react-guide/tree/master/examples/simple-react)
 This is to show how simply you can extends the html using just react. The directives are written in JSX and transformed to js in browser using babel.

##### [React rendering view when data changes](https://github.com/bhochhi/react-guide/tree/v-input-update)
  This demonstrates, how you can change the value in the input and gets the updated data printed in the screen(re-render), just like how ng-model in angularjs does. The concept is very similar to classic HTML where you bind the event listener in your input tag, like onChange event, which triggle and execute the function that updates the value. In vanilla js, you find the dom and update the text, but in React the value is bind to state of the component, so when state value changes, it re-renders the view.

##### [Not using jsx in client side](https://github.com/bhochhi/react-guide/tree/v-offline-transformation)
 This demonstrates how to transcompile your jsx into js and browser doesn't deal with jsx at runtime.

##### Transcompiling from commandline(offline Transformation)
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

##### [react with webpack](https://github.com/bhochhi/react-guide/tree/v-react-with-webpack)
  Here you see the same simple app but now the transformation is taking place in serverside and webpack is integrated to build the distribution. [ref1](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement) [ref2](http://survivejs.com/webpack/introduction/)

##### [react component render maps to array of data](https://github.com/bhochhi/react-guide/tree/v-render-maps)
  This shows how you can render the view with array of properties. Please understand [dynamic children](http://facebook.github.io/react/docs/multiple-components.html#dynamic-children) when render view using map. Else you may encounter a warning that will say:_Each child in an array or iterator should have a unique "key" prop. Check the render method of `exports`_ Also mind when registering any events with childrens, as you may have to bind parent _this_ into your callback function.

##### [react with webpack and gulp](https://github.com/bhochhi/react-guide/tree/react-webpack-gulp)
 This is same project as above but with gulp build system integrated. To build and host the app, just run ```npm install``` then ```gulp```

##### [React Way of Thinking](https://github.com/bhochhi/react-guide/tree/v-thinking-in-react)
  This should be one of the first to mention and start with while building react components and also best explained already by  Pete Hunt his [docs](https://facebook.github.io/react/docs/thinking-in-react.html). My explanation and [example](https://github.com/bhochhi/react-guide/tree/v-thinking-in-react) are just reiteration of same thinking. Following are the steps to keep in mind while working with react.

  1. __Break the UI into component hierarchy__ When you see UI mocks, you should be able to break down the UI into various components representing the hierarchy. This makes more sense as underlying structure, which is DOM itself is represented by tree structure. More you practice, better you would be in breaking the UI into various components and sub components. Some techniques: follow _Single Responsibility Principle_ so that component will be doing only one thing. Next, check your data model, a component should be responsible to represent certain part of the model.
  2. __Build Static Version in React__ This will be the first time you write some code. Create all those components finalized from step 1 and have it render your static data model. Use props to pass data from parent to child. Build components either top-down or bottom-up approach. Note that the flow of data is one directional: You pass data model from parent to child components and child components renders to represent the view. However, this is true only for the first time. To make view interactive and update/render when data changes, the data being passed are categorized into two types: props and states. If a view changes the props value, component will be update itself however when state value changes the view gets render automatically. So now you know if you want to render view, you need to change the value of state data. Next is how to Identify the states.
  3. __Identify the minimal representation of UI state__ So what you learned so far from step 2 is only state change triggers re-render of your view. Some tips for Identifying what data make just props and what make states: Keep the states to minimal set, think of all the pieces of data in the application. And ask these three questions to qualify data for state:
    1. Is it passed in from a parent via props? If so, it probably isn't state.
    2. Does it change over time? If not, it probably isn't state.
    3. Can you compute it based on any other states or props in your component? if so, it isn't state.  
  4. __Identify where the state should live__ Once we identify the states, next major step is Identifying where component should own these states. Following tips helps to find the owner of state:
    1. Identify all the components that renders something based on this state.
    2. Find common component of all components identified above up in hierarchy.
    3. Either this common component or another in higher up in the hierarchy should own the state.
    4. If you can't find a component where it makes sense to own the state, simply create a new component for holding the state and add it somewhere in the upper hierarchy as common owner component.
  Hence, the owner component should have getInitialState method to return the state object, the initial state of the application. Then pass this state object to child components  as a prop and use this prop to render the view.
  5. __Add inverse data flow__  Remember the meaning of one-directional data flow: data or state should be changed only by their owner component and the child components should be simply responsible to let the owner know about user interaction and actions so that owner could update the data respective components could re-render to update the view. Basically this is done by creating callback function in owner component that updates the state and data. Such function will be passed to child components who will trigger on user interaction and consequently causing all the components to re-render if the state has been passed those components as a props.

##### [react with flux](https://github.com/bhochhi/react-guide/tree/v-react-with-flux)
  1. Flux is architectural pattern that establish unidirectional data flow in the application.
  2. When a user interact with views, an action is created and send to __Dispatcher__ using __Action Creators__. The __Dispatcher__ then invokes all the callbacks that __Stores__ have registered with it. This is the how __Stores__ gets the data payload contained in the actions. The __Stores__ then emit a "change" event. All the __Views__ listening for such change event retrieve the data from __Stores__ and call _render()_ method via _setState()_ or _forceUpdate()_ to update themselves and their children.
  ![example](https://github.com/bhochhi/react-guide/blob/master/20160417_111716.jpg)
  3. As you can see, Flux applications have 4 major parts: Dispatcher, Store, Views and Action Creators.
  4. __Action Creator__ It creates an actions with type and payload. Actions are triggered by views usually by user interaction and propagated to Dispatcher.
  5. Dispatcher is a singleton and just a big registry of callbacks into the stores. Each store registers itself and provides a callback. When an action comes in from the action creator, it will pass to all registered stores regardless of action type via callbacks. That's why you can call it dump, has no intelligence of its own. However if you need to set up dependencies between stores so that one gets updated before other, you can have Dispatcher manage this using waitFor() method.
  6. __Store__ Holds on to all states and logic of the application. Store is responsible to register itself with the Dispatcher and provide it with a callback. This callback receives the action as a parameter. Within the store's registered callback, a switch statement based on the action's type is used to interpret the action and to provide the proper hooks into the store's internal methods. This is how action triggered result in an update to the state and props of the store, via Dispatcher. After stores are updated, they broadcast an event declaring that their state has changed, so the views may query the new state and update themselves.
  7. __Views and Controller-Views__ Views and Controller-Views are just logical separation of view components. Views are presenter, they are not aware of anything in the application but just the data handed to them by Controller-Views. Controller-Views are like middle manager, fetch data when store signals new or updated data is available, then calls its own setState() and forceUpdate() methods to cause its own render() and render() method of all descedants to run.

  Please checkout my [example](https://github.com/bhochhi/react-guide/tree/v-react-with-flux) to find basic implementation.

  references:
  https://github.com/facebook/flux/tree/master/examples/flux-todomvc,
  https://facebook.github.io/flux/docs/overview.html
  https://facebook.github.io/flux/docs/todo-list.html#content

######[react with redux](https://github.com/bhochhi/react-guide/tree/react-with-redux)
 




##### [Event Handing and Synthetic Events]()

##### [react with routing]()


##### [isomorphic react]()

##### [react with Immutable]()
###### [react with es6]()



######[react lifecycle]()

##### [react with TDD](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
https://facebook.github.io/jest/docs/tutorial.html#content

https://github.com/enaqx/awesome-react
https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
