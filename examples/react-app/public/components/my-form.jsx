var MyRadio = require("./my-radio.jsx");
var MyForm=React.createClass({

  render: function() {
    var data = [
        {
          value: "Happy",
          name: "myRadio",
          label: "Happy"
        }, {
          value: "Sad",
          name: "myRadio",
          label: "Sadies"
        }, {
          value: "OK",
          name: "myRadio",
          label: "OKieeeeeeeeeeeeeeeeeeeeeeeeee"
        }, {
          value: "Contained",
          name: "myRadio",
          label: "Contained"
        }
      ];
    var other=true;
    return (
      <div>
        <p className="h3">My Mood</p>
        <MyRadio other={other} options={data}/>
      </div>
    );
  }
});
module.exports = MyForm;
