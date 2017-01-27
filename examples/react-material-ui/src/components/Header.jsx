import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

import {AppBar, Tabs, Tab} from 'material-ui';

const defaultStyle = {
  marginLeft: 20
};

const styles = {
  appBar: {
    flexWrap: 'wrap'
  },
  tabs: {
    width: '100%'
  }
};

/**
 *        <Tabs style={styles.tabs}>
              <Tab label="Item 1" />
              <Tab label="Item 2" />
              <Tab label="Item 3" />
              <Tab label="Item 4" />
          </Tabs>
 */

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  } 

  render() {
    return (
      <header className="header">
          <AppBar title="Title"
                  style={styles.appBar}
                  iconClassNameRight="muidocs-icon-navigation-expand-more" >
           
          </AppBar>
          <h1 style={defaultStyle} >todos</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
