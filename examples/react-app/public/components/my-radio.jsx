module.exports = React.createClass({
  getInitialState: function() {
    return {otherChecked: false};
  },
  otherCheckedHandler: function(event) {
    console.log('other: ',event.target.checked);
    this.setState({otherChecked: event.target.checked})
  },
  radioHandler: function(event){
    console.log('Non other: ',event.target.checked);
    this.setState({otherChecked:!event.target.checked})
  },
  render: function() {
    var that = this;
    return (
      <div>
        { this.props.options.map(function(radioData) {
          return (
            <p className="radio" key={radioData.label}>
              <label>
                <input type="radio" value={radioData.value} name={radioData.name} onChange={that.radioHandler} />
                {radioData.label}
              </label>
            </p>
          );
        })
}
        {this.props.other && (
          <p className="radio">
            <label>
              <input type="radio" value="other" name="myRadio" onChange={this.otherCheckedHandler}/>
              Other
            </label>
            {this.state.otherChecked && <label className="form-inline">
              Specify:<input ref="Specify" type="text" name="myRadio" />
            </label>
}
          </p>
        )
}
      </div>
    )

  }
});
