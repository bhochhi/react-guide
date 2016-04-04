module.exports = React.createClass({
  render: function() {
    var value = this.props.data.value;
    var name = this.props.data.name;
    var label = this.props.data.label;
    return (
      <div className="my-radio">
        <label>
          <input type="radio" value={value} name={name} /> {label}
        </label>
      </div>
    )
  }
});
