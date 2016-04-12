###Demo
Trying to answer following questions through some codebase examples
* How to use Raw React?
* Why use React?
* What's virtual DOM?
* How React is different from Angularjs in term of how they updates the view?
* ES5 or ES6 for React?
* What's flux and how to incorporate with React?
* Redux? Reflux? what's going on?
* Best Practices?
* How react handles routing?
* How to TDD with react?



Following example projects are built progressively as we move further down.

##### [react with webpack](https://github.com/bhochhi/react-guide/tree/v-react-with-webpack)
Here you see the same simple app but now the transformation is taking place in serverside and webpack is integrated to build the distribution. [ref1](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement) [ref2](http://survivejs.com/webpack/introduction/)

##### [react component render maps to array of data](https://github.com/bhochhi/react-guide/tree/v-render-maps)
This shows how you can render the view with array of properties. Please understand [dynamic children](http://facebook.github.io/react/docs/multiple-components.html#dynamic-children) when render view using map. Else you may encounter a warning that will say:_Each child in an array or iterator should have a unique "key" prop. Check the render method of `exports`_ Also mind when registering any events with childrens, as you may have to bind parent _this_ into your callback function.

##### [react with webpack and gulp]()
This is same project as above but with gulp build system integrated. To build and host the app, just run ```npm install``` then ```gulp```



##### [react with flux]()
  1. Flux is architectural pattern that establish unidirectional data flow in the application.
  2. When a user interact with views, an action is propagated to __Dispatcher__ via __Action Creators__. The __Dispatcher__ then invokes all the callbacks that __Stores__ have registered with it for such action. This is the how __Stores__ gets the data payload contained in the actions. The __Stores__ then emit a "change" event. All the __Views__ listening for such change event retrieve the data from __Stores__ and call _render()_ method via _setState()_ or _forceUpdate()_ to update themselves and their children.
  3. As you can see, Flux applications have 4 major parts: Dispatcher, Store, Views and Action Creators.
  4. __Action Creator__ It creates an actions with type and payload. Actions are triggered by views usually by user interaction and propagated to Dispatcher.
  5. Dispatcher is a singleton and just a big registry of callbacks into the stores. Each store registers itself and provides a callback. When an action comes in from the action creator, it will pass to all registered stores regardless of action type via callbacks. That's why you can call it dump, has no intelligence of its own. However if you need to set up dependencies between stores so that one gets updated before other, you can have Dispatcher manage this using waitFor() method.
  6. __Store__ Holds on to all states and logic of the application. Store is responsible to register itself with the Dispatcher and provide it with a callback. This callback receives the action as a parameter. Within the store's registered callback, a switch statement based on the action's type is used to interpret the action and to provide the proper hooks into the store's internal methods. This is how action triggered result in an update to the state and props of the store, via Dispatcher. After stores are updated, they broadcast an event declaring that their state has changed, so the views may query the new state and update themselves.
  7. __Views and Controller-Views__ Views and Controller-Views are just logical separation of view components. Views are presenter, they are not aware of anything in the application but just the data handed to them by Controller-Views. Controller-Views are like middle manager, fetch data when store signals new or updated data is available, then calls its own setState() and forceUpdate() methods to cause its own render() and render() method of all descedants to run.

  Please checkout my example to find basic implementation.








  https://github.com/facebook/flux/tree/master/examples/flux-todomvc
https://facebook.github.io/flux/docs/overview.html
https://facebook.github.io/flux/docs/todo-list.html#content


#####[Event Handing and Synthetic Events]()

#####[react with routing]()

######[react with redux]()

#####[isomorphic react]()

#####[react with Immutable]()
######[react with es6]()



######[react lifecycle]()

#####[react with TDD](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
https://facebook.github.io/jest/docs/tutorial.html#content

https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
