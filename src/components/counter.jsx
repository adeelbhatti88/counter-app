import React, { Component } from "react";
//continue from 51:00
class Counter extends Component {
  state = {
    counter: 0,
    // imageUrl: "https://picsum.photos/200", //will generate random 200x200 image
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.counter === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { counter } = this.state; //object destructing, since we would have to use this.stat.count in multiple places on the next line
    return counter === 0 ? <h1>ZERO</h1> : counter; //if counter is equal to 0 return 'zero, otherwise, return counter value.
    //jsx expresssions are just like java script objects, you can return them from a function, or do whatever else you can do with variables also.
  }
}

export default Counter;
