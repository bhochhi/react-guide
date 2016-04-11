//operating as Controller-View

var MyRadio = require('./MyRadio.jsx');
var MyOtherRadio = require('./MyOtherRadio.jsx');


  function getMoodState(){
    return {
      otherSelected:MoodStore.isOtherSelected();
    };
  }

module.exports = React.createClass({
  getInitialState: function() {
    return {otherSelected: false};
  },

  onRadioSelected: function(otherChecked) {
    if(this.state.otherSelected===otherChecked)
    {
      return;
    }
    this.setState({otherSelected:otherChecked});
  },
  render: function() {
    var radios = this.props.options.map(function(radio) {
      return (
        <MyRadio data={radio} key={radio.label} onRadioSelected={this.onRadioSelected}></MyRadio>
      )
    }.bind(this));

    return (
      <div className='my-radio-group'>
        {radios}
        {!!this.props.other && (<MyOtherRadio onRadioSelected={this.onRadioSelected} otherSelected={this.state.otherSelected} other={this.props.other}/>)
}
      </div>
    );
  }
});
