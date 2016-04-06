var MyRadio = require('./my-radio.jsx');
var MyOtherRadio = require('./my-other-radio.jsx');
module.exports = React.createClass({
  getInitialState: function() {
    return {otherSelected: false};
  },

  onRadioSelected: function(e) {
      this.setState({otherSelected:e.target.value === 'Other'? e.target.checked:! e.target.checked});
  },
  render: function() {
    var that = this;
    var radios = this.props.options.map(function(radio) {
      return (
        <MyRadio data={radio} key={radio.label} onRadioSelected={that.onRadioSelected}></MyRadio>
      )
    });

    return (
      <div className='my-radio-group'>
        {radios}
        {!!this.props.other && (<MyOtherRadio onRadioSelected={this.onRadioSelected} otherSelected={this.state.otherSelected} other={this.props.other}/>)
}
      </div>
    );
  }
});
