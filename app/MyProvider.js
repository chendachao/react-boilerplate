import React, { Component, createContext } from 'react';

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    message: 'Temp Text',
    setMessage: message =>
      this.setState({
        message,
      }),
  };

  render() {
    const value = {
      state: this.state,
      ...this.props,
    };
    return (
      <MyContext.Provider value={value}>
        {this.props.children}
        {/* // this indicates that the global store is accessible to all the child tags with MyProvider as Parent */}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
