require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import HomeIcon from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import config from 'config';
import is from 'is_js';

const devtools = (() => {
  if (config.appEnv === 'dev') {
    const DevTools = require('components/DevTools').default;    
    return <DevTools />;
  } else {
    return null;
  }
})();


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open:true};
    console.log('this.state',this.state);
  }  

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const { headerText } = this.props;
    const leftIcon = <noscript />;
    const rightIcon = <noscript />;

    return (
      <div id="main">
        {devtools}
        <AppBar
          title={headerText}
          iconElementLeft={leftIcon}
          iconElementRight={rightIcon}
        />
       <RaisedButton label="Toggle Drawer"   />
        <Drawer open={this.state.open}>
         <AppBar title="Oculus" />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>      
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Layout;
