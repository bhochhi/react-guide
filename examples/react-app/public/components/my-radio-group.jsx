var MyRadio = require('./my-radio.jsx');
var MyOtherRadio = require('./my-other-radio.jsx');
module.exports = React.createClass({

  render: function() {
    var radios = this.props.options.map(function(radio) {
      return (
        <MyRadio data={radio} key={radio.label}></MyRadio>
      )
    });


    return (
      <div className='my-radio-group'>
        {radios}
        {!!this.props.other && (<MyOtherRadio other={this.props.other} />)}
      </div>
    );
  }
});
