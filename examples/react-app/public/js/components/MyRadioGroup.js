'use strict';
//operating as Controller-View

var MyRadio = require('./MyRadio.jsx');
var MyOtherRadio = require('./MyOtherRadio.jsx');
var MoodActions = require('../actions/MoodActions');
var MoodStore = require('../stores/MoodStore');

function getMoodState() {
  return {otherSelected: MoodStore.isOtherSelected()};
}

var MyRadioGroup = React.createClass({
  getInitialState: function() {
    return getMoodState();
  },

  _onChange: function(otherChecked) {
    if (this.state.otherSelected === otherChecked) {
      return;
    }
    this.setState(getMoodState());
  },

  componentDidMount: function() {
    MoodStore.addChangeListener(this._onChange);
  },
  componentWillUnMount: function() {
    MoodStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var radios = this.props.options.map(function(radio) {
      return (
        <MyRadio data={radio} key={radio.label} otherSelected={this.state.otherSelected}></MyRadio>
      )
    }.bind(this));

    return (
      <div className='my-radio-group'>
        {radios}
        {!!this.props.other && (<MyOtherRadio otherSelected={this.state.otherSelected} other={this.props.other}/>)
}
      </div>
    );
  }
});
module.exports = MyRadioGroup;
