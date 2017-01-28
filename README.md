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

[React-howto](https://github.com/petehunt/react-howto)


Following example projects are built progressively as we move further down.

##### [react with webpack](https://github.com/bhochhi/react-guide/tree/v-react-with-webpack)
Here you see the same simple app but now the transformation is taking place in serverside and webpack is integrated to build the distribution. [ref1](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement) [ref2](http://survivejs.com/webpack/introduction/)

##### [react component render maps to array of data](https://github.com/bhochhi/react-guide/tree/v-render-maps)
This shows how you can render the view with array of properties. Please understand [dynamic children](http://facebook.github.io/react/docs/multiple-components.html#dynamic-children) when render view using map. Else you may encounter a warning that will say:_Each child in an array or iterator should have a unique "key" prop. Check the render method of `exports`_ Also mind when registering any events with childrens, as you may have to bind parent _this_ into your callback function.

##### [react with webpack and gulp]()
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








  https://github.com/facebook/flux/tree/master/examples/flux-todomvc
https://facebook.github.io/flux/docs/overview.html
https://facebook.github.io/flux/docs/todo-list.html#content
https://github.com/enaqx/awesome-react


#####[Event Handing and Synthetic Events]()

#####[react with routing]()

######[react with redux](http://www.jamasoftware.com/blog/lets-write-redux/)
 - Know three principles of Redux
    1. Single source of truth (the state for whole app is stored in object tree within a single store)
    2. State is read-only (mutate the state is emit action, and next state is always new state not modified previous state)
    3. Changes are made with pure functions(reducers)
  - Store is collection of bunch of pure functions(reducers)
  -  http://redux.js.org/docs/introduction/Ecosystem.html
  -  
#####[isomorphic react]()

#####[react with Immutable]()
######[react with es6]()



######[react lifecycle]()

#####[react with TDD](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

**How to run the test?**

```npm test``` to run all client and server side tests.

```npm run test:client``` to run only client-side tests.

```npm run test:server``` to run only server-side tests.


**What is testing framework being used?**
 
[**Mocha**](https://mochajs.org/) is the testing framework we use for both server and public side unit testing. 


**What are assertion libraries being used?**

We are using [Chai](http://chaijs.com/) for assertion with its **expect** flavor and [Chai-as-promised](https://github.com/domenic/chai-as-promised) as plugin when needed for asserting asynchronous test. We recommend to be consistent on such selection.
We also use [Enzyme](http://airbnb.io/enzyme/index.html) for react component test. Details are below how it is being used for testing react components.

**What are mocking libraries being used?**

[Sinon](http://sinonjs.org/) for mocking 



**What and How should react components be tested?**

Since react component is basically view, we would like to focus test mainly on user interaction, like for certain event:
 - What should be the response of component?
 - Did all render/re-render take place as expected?
 - Did all handlers fired as expected?
 - Did is the state and props of the component changed as expected after triggering events?
 - Also you can test whether the component has expected child components or DOM elements or properties.
 
Using [enzyme](http://airbnb.io/enzyme/index.html) for such tests has been made very easy without getting component into browser window. You can simulate the events, render/rerender the components in isolation or in full DOM configuration. We recommend you to reference its APIs for your various requirements.  Here is the [test example](https://github.com/Telogical/DandyLion/blob/issue308-integrate-react-tests/test/unit/public/features/LocationEntry/components/Zipcode/Zipcode.react.js) of one of our react component **ZipCode**. The report of its tests reads as follows: You can see the test first verify important elements/components exists. Then, it interacts with the component by simulating events with various datasets(valid zipcode, out of scope zipcode, invalid zipcode) and verifies the result of rerendering/execution are as expected.

```
  Given a Zipcode component
    And I have theme, style, interactionHandlers for onValidZipCode and onZipCodeClear event
      And I have empty as intial location for zipcode
        When the component is rendered
          √ Should have TextField component
          √ Should have "Enter ZIP code" as a label of TextField
          √ Should have empty as initial value of TextField
          √ Should have LocationDisplay component
          √ Should have value and them props with LocationDisplay
          When I enter a valid and in scope zipcode
            √ Should have ZipCode as value of TextField
            √ Should have city and state displayed on error text
            √ Should have triggered onValidZipCode interaction handler
            √ Should have displayed "Market: <shortDma value>" in LocationDisplay
          When I enter a valid but out of scope zipcode
            √ Should have ZipCode as value of TextField
            √ Should have displayed  "ZipCode out of scope" on errortext
            √ Should have triggered onValidZipCode interaction handler
            √ Should have displayed empty in LocationDisplay
          When I enter a invalid zipcode
            √ Should have ZipCode as value of TextField
            √ Should have displayed  "Valid ZIP code required" on errortext
            √ Should not have triggered onValidZipCodeCalled interaction handler
            √ Should have displayed empty in LocationDisplay

  17 passing (263ms)

```

**[What and How should a Store be tested?](https://facebook.github.io/flux/docs/testing-flux-applications.html#testing-stores)**

Store in our application are based on Flux architecture. It has a specific convention how to structure the code to fulfill its responsibility i.e., managing business logic and data.
  * A store should expose basically 3 types APIs:
    - To fetch the data that store manages.(get)
    - To add listener so that store can notify subscriber listening for various events.(addChangeListener to listen for data change event).
    - To remove listener so that store do not notify subscribers who were listening before.
  * A store should have callback method(_actionHandler) which would be used to register with application dispatcher. 
 
External sources that depends on store communicate ultimately via such callback method(actionHandler) using various action object. This shows that callback method(actionHandler) should be our primary focus of our test as it controls the logic flow of the store based on _action_ it receives as an argument. We recommend following type of tests by mocking any type of external dependencies if necessary:
```
 Given a Store,
  ...(mockings)
  When I dispatch certain action,
   It should have data
   It should have model with props
   It should have dispatch some other action/s
```
Please refer to example [test](https://github.com/Telogical/DandyLion/blob/issue308-integrate-react-tests/test/unit/public/features/LocationEntry/LocationEntryStore.js) for one the store in the project. The report of this test looks as follows:

```
 Given a LocationEntryStore
    And I have a data from LocationEntryDataService
      When I dispatch an action of type REQUEST_LOCATION_ENTRY_DATA with clientId
        ✓ should dispatch the action of type REQUEST_LOCATION_ENTRY_DATA_SUCCESS with actualModel
        ✓ should set the locationEntry Model with client and theme properties
        ✓ should have clientId, name and applications properties within client
    And I have an error from LocationEntryDataService
      When I dispatch an action of type REQUEST_LOCATION_ENTRY_DATA with clientId
        ✓ should dispatch the action of type REQUEST_LOCATION_ENTRY_DATA_FAILURE with actualModel
        ✓ should return the locationEntry Model with client properties
        ✓ should return the error within client
``` 
   


https://facebook.github.io/jest/docs/tutorial.html#content

https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
https://github.com/ReactTraining 
