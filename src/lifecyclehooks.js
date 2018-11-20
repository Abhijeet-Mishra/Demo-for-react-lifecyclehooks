import React, { Component } from "react";
import ChildComp from "./child-component";
class LifeCycleHooks extends Component {
  constructor() {
    super();
    this.state = {
      name: "IBM"
    };
    console.log("We are parent constructor");
  }
  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("we are in parent component Will Mount section");
    //this is the best place to set the setState  here because the component is not re-rendered and some time based on props we need to change the value of state
    //Also since it is called once so if we are doing any thing with the global events like window etc tgen we can do it here
  }

  componentDidMount() {
    console.log("We are in parent ComponentDoidMount section");
  }
  changeState() {
    this.setState({ name: "CTS" });
  }
  componentWillReceiveProps() {
    //It will be called when we will re-render
    console.log("We are in parent ComponentwillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent should component Update");
    return true;
  }
  componentWillUpdate() {
    console.log("Parent Component will Update");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Parent prevProps", prevProps);
    console.log("Parent prevState", prevState);
    console.log("Parent Component Did Update");
  }
  componentWillUnmount() {
    console.log("Parent Componentwill Unmount section");
  }
  Unmountme() {
    this.setState({ name: "Accenture" });
  }
  render() {
    console.log("You are in parent render method");
    if (this.state.name === "Accenture") {
      return <div>{"You delete every thing bro"}</div>;
    }

    return (
      <div>
        {this.state.name}
        {this.state.innerWidth}
        <ChildComp name={this.state.name} />
        {this.props.helloparent}
        <button onClick={this.changeState.bind(this)}>ClickMe</button>
        <br />
        <button onClick={this.Unmountme.bind(this)}>Empty CHild</button>
      </div>
    );
  }
}

export default LifeCycleHooks;
