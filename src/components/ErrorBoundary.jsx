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
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
 }
    return this.props.children;
  }  
}