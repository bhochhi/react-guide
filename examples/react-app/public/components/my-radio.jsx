module.exports = React.createClass({

  render:function(){
    var data = [
      {}
    ]
    return (
      <p className="radio">
        <label>
          <input type="radio" value="Happy" name="myRadio"/>
          Happy
        </label>
      </p>
      //   <p className="radio">
      //     <label>
      //       <input type="radio" value="Happy" name="myRadio"/>
      //       Happy
      //     </label>
      //   </p>
      //
      //   <p className="radio">
      //     <label>
      //       <input type="radio" value="Sad" name="myRadio"/>
      //       Sad
      //     </label>
      //   </p>
      //
      //   <p className="radio">
      //     <label>
      //       <input type="radio" value="OK" name="myRadio"/>
      //       OK
      //     </label>
      //   </p>
      //
      //   <p className="radio">
      //     <label>
      //       <input type="radio" value="Contained" name="myRadio"/>
      //       Contained
      //     </label>
      //   </p>
      //   <p className="form-group radio">
      //     <label>
      //       <input type="radio" name="myRadio" onChange={this.otherChecked}/>
      //       Other
      //     </label>
      //     {this.state.otherChecked &&
      //     (<label className="form-inline">
      //       Specify:<input type="text" name="myRadio" value={this.state.value} onChange={this.otherValueChange}/>
      //   </label>)
      // }
      //   </p>
      //   {this.state.value && <p>You specified: {this.state.value}</p>}
    );
  }
})
