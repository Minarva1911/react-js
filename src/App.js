import logo from './logo.svg';
import './App.css';
import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Components/Useroutput/Useroutput';
// import Signup from './Components/Signup/Signup';
// import Signin from './Components/Signin/Signin';
// import Lifecycle from './Components/Lifecycle/Lifecycle';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import React, { Component } from 'react';

class App extends Component {
  state={
    person:[{
        name:"Minarva",age:"22",
    }]
}
buttonClickHandler=()=>{
  console.log('clicked');
this.setState({
  person:[{name:"Mohan",age:"25"}]
})
}
  render() {
    return (
      <div>
      <Userinput/>
      <Useroutput name='Qwinix Technology'/>
      <Useroutput name='Qwinix Technology'/>
      <button onClick={this.buttonClickHandler}>click here</button>
      <p>I am {this.state.person[0].name} my age is{this.state.person[0].age}</p>
      </div>
    );
    }
  }


export default App;
