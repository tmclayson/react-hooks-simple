import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  // state = { resources: [] };
  // componentDidMount is not called on each re-render
  // componentDidMount = async () => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
  //   this.setState({ resources: response.data });
  // };

  // is called on every parent re-redner and every change of state
  // componentDidUpdate = async (prevProps, prevState) => {
  //   if (prevProps.resource !== this.props.resource) {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${this.props.resource}`
  //     );
  //     this.setState({ resources: response.data });
  //   }
  // };
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
