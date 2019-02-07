import React, { Component } from 'react';
import axios from 'axios';

export default class ResourceList extends Component {
  state = { resources: [] };
  componentDidMount = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
    this.setState({ resources: response.data });
  };

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}
