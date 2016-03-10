var MyRadio = React.createClass({
  displayName: "MyRadio",

  getInitialState: function () {
    return { value: 'Hello!' };
  },
  otherValueChange: function (event) {
    this.setState({ value: event.target.value });
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        { className: "h3" },
        "My Mood"
      ),
      React.createElement(
        "p",
        { className: "radio" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "radio", value: "Happy", name: "myRadio" }),
          "Happy"
        )
      ),
      React.createElement(
        "p",
        { className: "radio" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "radio", value: "Sad", name: "myRadio" }),
          "Sad"
        )
      ),
      React.createElement(
        "p",
        { className: "radio" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "radio", value: "OK", name: "myRadio" }),
          "OK"
        )
      ),
      React.createElement(
        "p",
        { className: "radio" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "radio", value: "Contained", name: "myRadio" }),
          "Contained"
        )
      ),
      React.createElement(
        "p",
        { className: "form-group radio" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "radio", value: "Other", name: "myRadio" }),
          "Other"
        ),
        React.createElement(
          "label",
          { className: "form-inline" },
          "Specify:",
          React.createElement("input", { type: "text", name: "myRadio" })
        )
      )
    );
  }
});
ReactDOM.render(React.createElement(MyRadio, null), document.getElementById("app"));
