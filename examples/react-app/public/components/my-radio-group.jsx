var MyRadio = require('./my-radio.jsx');
var MyOtherRadio = require('./my-other-radio.jsx');
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
