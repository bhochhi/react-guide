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
* How to TDD with react?
*

Following example projects are built progressively as we move further down.

######[react with webpack](https://github.com/bhochhi/react-guide/tree/v-react-with-webpack)
Here you see the same simple app but now the transformation is taking place in serverside and webpack is integrated to build the distribution. [ref1](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement) [ref2](http://survivejs.com/webpack/introduction/)

######[react component render maps to array of data](https://github.com/bhochhi/react-guide/tree/v-render-maps)
This shows how you can render the view with array of properties. Please understand [dynamic children](http://facebook.github.io/react/docs/multiple-components.html#dynamic-children) when render view using map. Else you may encounter a warning that will say:_Each child in an array or iterator should have a unique "key" prop. Check the render method of `exports`_ Also mind when registering any events with childrens, as you may have to bind parent _this_ into your callback function.

######[react with webpack and gulp]()
This is same project as above but with gulp build system integrated. To build and host the app, just run ```npm install``` then ```gulp```


#####[React Way of Thinking]()
This should be one of the first to mention and start with while building react components and also best explained already by  Pete Hunt his [docs](https://facebook.github.io/react/docs/thinking-in-react.html). My explanation and example are just reiteration of same thinking. Following are the steps to keep in mind while working with react.

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

######[react with flux]()

#####[Event Handing and Synthetic Events]()



######[react with redux]()

#####[react with TDD](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)


https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
