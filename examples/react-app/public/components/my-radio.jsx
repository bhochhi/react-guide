module.exports = React.createClass({
  propTypes:{
    value:React.PropTypes.string,
    name:React.PropTypes.string
  },
  changeHandler :function(e){
    this.props.onRadioSelected(!e.target.checked);
  },
  render: function() {
    var value = this.props.data.value;
    var name = this.props.data.name;
    var label = this.props.data.label;
    return (
      <div className="my-radio">
        <label>
          <input type="radio" onChange={this.changeHandler} value={value} name={name} /> {label}
        </label>
      </div>
    )
  }
});
