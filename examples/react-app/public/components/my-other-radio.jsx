
module.exports = React.createClass({

  render:function(){
    var value = this.props.other.value;
    var name = this.props.other.name;
    var label = this.props.other.label;
    return (
      <div className="my-other-radio">
        <label>
          <input type="radio" value={value} name={name}/> {label}
        </label>
      </div>
    );

  }
});
