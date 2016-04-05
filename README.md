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
I should have covered this earlier when working with just raw React. My example reflects the way Pete Hunt suggested how one should think of react in his [docs](https://facebook.github.io/react/docs/thinking-in-react.html). Following are the steps to keep in mind while working with react.

1. __Break the UI into component hierarchy__ When you see UI mocks, you should be able to break down the UI into various components representing the hierarchy. This makes more sense as underlying structure, which is DOM itself is represented by tree structure. More you practice, better you would be in breaking the UI into various components and sub components. Some techniques: follow _Single Responsibility Principle_ so that component will be doing only one thing. Next, check your data model, a component should be responsible to represent certain part of the model. 
2. __Build Static Version in React__ 

######[react with flux]()


######[react with redux]()

#####[react with TDD](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)


https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
