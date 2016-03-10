var MyRadio = require("./my-radio.jsx");
var MyForm=React.createClass({
  getInitialState: function() {
    return {value: 'Hello!',
            otherChecked:false};
  },
  otherValueChange: function(event) {
    this.setState({value: event.target.value});
  },
  otherChecked:function(event){
    console.log('event',event.target);
    this.setState({otherChecked:event.target.checked})
  },
  render: function() {
    return (
      <div>
        <p className="h3">My Mood</p>
        <MyRadio/>
      </div>
    );
  }
});
module.exports = MyForm;
