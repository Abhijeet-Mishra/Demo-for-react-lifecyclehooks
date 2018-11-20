import React, { Component } from "react";
class ChildComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "IBM"
    };
    console.log("We are child constructor");
  }
  componentWillMount() {
    //It will be called when we will re-render
    console.log("we are in child component Will Mount section");
  }
  componentWillReceiveProps() {
    console.log("We are in child ComponentwillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child should component Update");
    return true;
  }
  componentWillUpdate() {
    console.log("Child Component will Update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Child prevProps", prevProps);
    console.log("Child prevState", prevState);
    console.log("Child Component Did Update");
  }
  componentDidMount() {
    console.log("We are in child ComponentDoidMount section");
  }
  render() {
    console.log("You are in child render method");
    return <div>name:{this.props.name}</div>;
  }
}

export default ChildComp;
