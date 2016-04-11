'use strict';
module.exports = React.createClass({

  changeHandler :function(e){
    this.props.onRadioSelected(e.target.checked);
  },
  render: function() {
    var value = this.props.other.value;
    var name = this.props.other.name;
    var label = this.props.other.label;
    return (
      <div className="my-other-radio">
        <label>
          <input type="radio" value={value} onChange={this.changeHandler}  name={name}/> {label}
        </label>

        {this.props.otherSelected && <label className="other-specify">Specify: <input type="text" /></label>}
      </div>

    );

  }
});
