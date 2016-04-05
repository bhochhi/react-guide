module.exports = React.createClass({
  propTypes:{
    value:React.PropTypes.string,
    name:React.PropTypes.string
  },
  render: function() {
    var value = this.props.data.value;
    var name = this.props.data.name;
    var label = this.props.data.label;
    return (
      <div className="my-radio">
        <label>
          <input type="radio" onChange={this.props.onRadioSelected} value={value} name={name} /> {label}
        </label>
      </div>
    )
  }
});
