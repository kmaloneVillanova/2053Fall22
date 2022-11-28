import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} </h1>;
  }
}
/*
function Welcome(props) {
  /* Can't assign a value to props object 
  /* Use state if you'd like to change the value of attributes 
  // if (props.name == "John") {
  //   props.name="Jack";
  // }
  return <h1>Hello, {props.name} </h1>
} */

function App() {
  return (
    <Welcome name="John" />   
  );
}

export default App;
