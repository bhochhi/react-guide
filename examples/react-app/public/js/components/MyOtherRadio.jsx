'use strict';
module.exports = React.createClass({

  _onChangeHandler :function(e){
      MoodActions.radioSelected(e.target.checked);
  },
  render: function() {
    var value = this.props.other.value;
    var name = this.props.other.name;
    var label = this.props.other.label;
    return (
      <div className="my-other-radio">
        <label>
          <input type="radio" value={value} onChange={this._onChangeHandler}  name={name}/> {label}
        </label>

        {this.props.otherSelected && <label className="other-specify">Specify: <input type="text" /></label>}
      </div>

    );

  }
});
