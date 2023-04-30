import React from "react";
import { Component } from "react";
import "../App.css"

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }


  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    // if there is an error render...
    if (this.state.errorInfo) {
      return (
        <div>
          {/*a phrase and details of the error */}
          <h2>Something went wrong.</h2>
          <details>
            <p>{this.state.error && this.state.error.toString()}</p>
            <br />
           <p>{this.state.errorInfo.componentStack}</p> 
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}