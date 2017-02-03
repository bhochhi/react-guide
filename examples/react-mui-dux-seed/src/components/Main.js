import React from 'react';
import NavigationBar from './NavigationBar';


const Main = (props) => (
  <div>
    <NavigationBar />
    {props.children}
  </div>
);

export default Main;
