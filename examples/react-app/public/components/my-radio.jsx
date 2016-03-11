module.exports = React.createClass({
  render: function() {
    var data = [
      {
        value: "Happy",
        name: "myRadio",
        label: "Happy"
      }, {
        value: "Sad",
        name: "myRadio",
        label: "Sad"
      }, {
        value: "OK",
        name: "myRadio",
        label: "OK"
      }, {
        value: "Contained",
        name: "myRadio",
        label: "Contained"
      }, {
        value: "Other",
        name: "myRadio",
        label: "Other"
      }
    ];
    return (
      <div>
        {_.map(data, function(radioData) {
          return (
            <p className="radio">
              <label>
                <input  type="radio" value={radioData.value} name={radioData.name}/> {radioData.label}
              </label>
            </p>
          )
        })
}
      </div>
    )

  }
});
