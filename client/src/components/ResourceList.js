import React, { Component } from 'react';
import axios from 'axios';

export default class ResourceList extends Component {
  state = { resources: [] };
  // componentDidMount is not called on each re-render
  componentDidMount = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({ resources: response.data });
  };

  // is called on every parent re-redner and every change of state
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );
      this.setState({ resources: response.data });
    }
  };

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}
