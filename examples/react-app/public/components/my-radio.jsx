module.exports = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!',
            otherChecked:false};
  },
    otherValueChange: function(event) {
      console.log(event.target.value);
      this.setState({value: event.target.value});
    },
    otherChecked:function(event){
      console.log('event',event.target);
      this.setState({otherChecked:event.target.checked})
    },
    handleMe:function(event){
      this.setStat
      console.log('handleMe',event.target);
    },
  render: function() {
    console.log(this.state.otherChecked)
    return (
      <div onChange={this.handleMe}>

        {_.map(this.props.options, function(radioData) {
          return (
            <p className="radio" key={radioData.label}>
              <label>
                <input  type="radio" value={radioData.value} name={radioData.name}/> {radioData.label}
              </label>
            </p>
          )
        })
      }
      {this.props.other && (
        <p className="radio">
          <label>
            <input  type="radio" value="other" name="myRadio" onChange={this.otherChecked}/> Other
          </label>
          {this.state.otherChecked &&
                      <label className="form-inline">
                       Specify:<input type="text" name="myRadio" value={this.state.value} />
                      </label>

          }
        </p>
      )
    }
      </div>
    )

  }
});
