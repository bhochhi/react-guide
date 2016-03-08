'use strict';
class App {
  constructor() {
    console.log("init");
  }

  printMe(){
    console.log("Hello world");
  }
}

var app = new App();
app.printMe();
