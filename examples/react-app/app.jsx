
var MyRadio = React.createClass({
  getInitialState: function() {
   return {value: 'Hello!'};
 },
 otherValueChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <div>
      <p className="h3">My Mood</p>
      <p className="radio">
        <label>
            <input type="radio" value="Happy" name="myRadio"/>
            Happy
        </label>
      </p>

      <p className="radio">
            <label>
              <input type="radio" value="Sad" name="myRadio" />
              Sad
            </label>
      </p>

      <p className="radio">
          <label>
            <input type="radio" value="OK" name="myRadio"/>
            OK
          </label>
      </p>

        <p className = "radio" >
        <label>
            <input type="radio" value="Contained" name="myRadio"/>
            Contained
        </label>
        </p>
        <p className="form-group radio">
            <label>
              <input type="radio" value="Other" name="myRadio" />
              Other
            </label>
            <label className="form-inline">
              Specify:<input type="text" name="myRadio" value={this.state.value} onChange={this.otherValueChange} / >
            </label>
        </p>
        <p>Other value you just specified: {this.state.value}</p>
    </div>

);
}
});
ReactDOM.render(<MyRadio />,document.getElementById('app'));
