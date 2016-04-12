'use strict';

var MoodActions = require('../actions/MoodActions');

module.exports = React.createClass({
  propTypes:{
    value:React.PropTypes.string,
    name:React.PropTypes.string
  },
  _onChangeHandler :function(e){
      console.log('MoodActions',MoodActions);
      MoodActions.radioSelected(!e.target.checked);
  },
  render: function() {
    var value = this.props.data.value;
    var name = this.props.data.name;
    var label = this.props.data.label;
    return (
      <div className="my-radio">
        <label>
          <input type="radio" onChange={this._onChangeHandler} value={value} name={name} /> {label}
        </label>
      </div>
    )
  }
});
