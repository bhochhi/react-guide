require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

import FontIcon from 'material-ui/FontIcon';
import {Tabs,Tab} from 'material-ui';

import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import HomeIcon from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import config from 'config';
import is from 'is_js';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const devtools = (() => {
  if (config.appEnv === 'dev') {
    const DevTools = require('./DevTools').default;    
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
    color:'#CFF',
    padding:'0 20px', 
    height:'64px'
  },
  iconMenu:{
    color:'#CFF',
    padding:'0 20px', 
    height:'64px'
  }
};


const menu =[
  {
    label : "page ",
    link:'#/page'
  },
   {
    label : "page 1",
    link:'#/page1'
   },
   {
    label : "page 2",
    link:'#/page2'
  }
];

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);  
  }
  state = {
    open:false
  }
  handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };
   handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handleActive = (tab) =>{
  //  this.context.router.transitionTo(tab.props.route);
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  handleChange = (value) =>{
   console.log('route',value);
   this.context.router.transitionTo(value);
   this.setState({
      value: value,
    });
  }
  selectInitialTab = (e)=>{
    console.log(e);
    return -1;
  }
  render() {
      var tabsMenu = (
        <div>
      <Tabs style={{paddingRight:'60px'}}  value={this.state.value} initialSelectedIndex={this.selectInitialTab()}
        onChange={this.handleChange}>
      {menu.map(function(item,i ){ return (<Tab value={item.link}  key={i} label={item.label}  style={styles.menu}    
      />)}.bind(this))}
      <Tab value='dropMenu' label={'dropMenu'} style={styles.menu} onClick={this.handleTouchTap}/>
      </Tabs>
      <Popover zDepth={5}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem value="1"><Link to="page" onClick={this.handleRequestClose}>page 1</Link></MenuItem>
            <MenuItem value="2"><Link to="page1" onClick={this.handleRequestClose}>page 2</Link></MenuItem>
            <MenuItem value="3"><Link to="page2" onClick={this.handleRequestClose}>page 3</Link></MenuItem>
            <MenuItem value="4"><Link to="page" onClick={this.handleRequestClose}>page 4</Link></MenuItem>
          </Menu>
      </Popover>
      </div>
    );

    var profileMenu = (
      <IconMenu 
          iconButtonElement={<IconButton style={styles.iconMenu}><i className="material-icons">account_circle</i></IconButton>}
          onChange={this.handleChangeSingle}
          anchorOrigin = {{ vertical: 'bottom', horizontal: 'left',}} 
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Profile" />
          <MenuItem value="2" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
    )
   
    return (      
      <div id="main">
              {devtools}
              <AppBar showMenuIconButton={false} title={<Link className="title" to="/" >Oculus </Link>}>
                 {tabsMenu}
                {profileMenu}
         </AppBar>
        {this.props.children}
     </div>
    )
  }
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavigationBar;
