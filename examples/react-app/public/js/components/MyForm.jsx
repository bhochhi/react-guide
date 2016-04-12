

var MyRadioGroup = require('./MyRadioGroup');
var MyForm = React.createClass({

  getDefaultProps: function() {
    var data = [
      {
        value: 'Happy',
        name: 'myRadio',
        label: 'Happy'
      }, {
        value: 'Sad',
        name: 'myRadio',
        label: 'Sadies'
      }, {
        value: 'OK',
        name: 'myRadio',
        label: 'OK'
      }, {
        value: 'Contained',
        name: 'myRadio',
        label: 'Contained'
      }, {
        value: 'Angry',
        name: 'myRadio',
        label: 'Angry'
      }
    ];
    var other = {
      value: 'Other',
      name: 'myRadio',
      label: 'Other'
    };

    return {data: data, other: other}
  },

  render: function() {
    return (
      <div className='my-form'>
        <p className='h3'>My Mood</p>
        <MyRadioGroup other={this.props.other} options={this.props.data}/>
      </div>
    );
  }
});
module.exports = MyForm;
