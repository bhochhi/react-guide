require('styles/App.scss');

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

import FontIcon from 'material-ui/FontIcon';

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
    label : "page 1",
    link:'#/page'
  },
   {
    label : "page 2",
    link:'#/page1'
   },
   {
    label : "page 3",
    link:'#/page1'
  }
];

class Layout extends React.Component {
  constructor(props) {
    super(props);  
  }

  handleClick(ev) {
  alert('onTouchTap triggered on the title component');
}

state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };
handleMenuSelect = (event, value) => {
    this.setState({
      valueSelected: value,
    });
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };

  handleChange = (event, index, value) => this.setState({value});
  handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };
   handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  render() {

    var menus = menu.map(function(item,i ){ return (<FlatButton  key={i} label={item.label} style={styles.menu} 
    href={item.link} />)}.bind(this));
   
    return (      
      <div id="main">
              {devtools}
         <AppBar showMenuIconButton={false} title={<span>Oculus</span>}>
          <div style={{paddingRight:'60px'}}>
           {menus} 
            <FlatButton
          onTouchTap={this.handleTouchTap}
           style={styles.menu}
          label="dropMenu"
        />  
            <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}    
          onRequestClose={this.handleRequestClose}     
        >
          <Menu value={this.state.menuSelected} onChange={this.handleMenuSelect}>
            <MenuItem value="1" primaryText="Refresh" />
            <MenuItem value="2" primaryText="Help &amp; feedback" />
            <MenuItem value="3" primaryText="Settings" />
            <MenuItem value="4" primaryText="Sign out" />
          </Menu>
        </Popover>        
          </div>
                
         <IconMenu 
          iconButtonElement={<IconButton style={styles.menu}><i className="material-icons">account_circle</i></IconButton>}
          onChange={this.handleChangeSingle}
          anchorOrigin = {{ vertical: 'bottom', horizontal: 'left',}} 
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
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
