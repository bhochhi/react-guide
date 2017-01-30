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

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const devtools = (() => {
  if (config.appEnv === 'dev') {
    const DevTools = require('components/DevTools').default;    
    return <DevTools />;
  } else {
    return null;
  }
})();


const styles = {
  title: {
    cursor: 'pointer',
  },
  menu:{
    height:'64px', 
    lineHeight:'64px',
    color:'#CFF' 
  }
};


const menu =[
  {
    label : "menu 1",
    link:'#/menu1'
  },
   {
    label : "menu 2",
    link:'#/menu2'
   },
   {
    label : "menu 3",
    link:'#/menu3'
  },
   {
    label : "menu 4",
    link:'#/menu4'
  }
];

const profile = () => (
  <div>
    <IconButton iconClassName="muidocs-icon-custom-github" />
  </div>
);

class Layout extends React.Component {
  constructor(props) {
    super(props);  
  }

  handleClick(ev) {
  alert('onTouchTap triggered on the title component');
}


  render() {

    var menus = menu.map(function(item,i ){ return (<FlatButton  key={i} label={item.label} style={styles.menu} />)}.bind(this));
   
    return (      
      <div id="main">
              {devtools}
         <AppBar showMenuIconButton={false} title={<span>Oculus</span>}>
          <div style={{paddingRight:'60px'}}>
           {menus}           
          </div>
          {profile}
         </AppBar>
        {this.props.children}
     </div>
    )
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Layout;
