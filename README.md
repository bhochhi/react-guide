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

######[react with flux]()

######[react with redux]()

#####[react with TDD](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)


https://blog.risingstack.com/the-react-way-getting-started-tutorial/
http://victorsavkin.com/post/99998937651/building-angular-apps-using-flux-architecture
https://egghead.io/lessons/react-development-environment-setup?series=react-flux-architecture
