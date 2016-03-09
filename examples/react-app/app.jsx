//using cs5
var App = React.createClass({
  render:function(){
    return (
          <div>
            Hello world!!!
            <Message message="Hello everyone!!"></Message>
            <MyRadio/>
          </div>
        );
      }
});

//using es6
class Message extends React.Component {
  render() {
        return (
        <div>
        {true && (<Person name="Rupesh"/>)}
         Here is my message:{this.props.message}
        </div>
      );
    }
}

//using es6 arrow syntax;
const Person = (props) => (<div>Hello My name is {props.name} </div>);

ReactDOM.render(<MyRadio />,document.getElementById('app'));
