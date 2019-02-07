import React, { useState, useEffect } from 'react';
import axios from 'axios';

// this function now has no ties to any specific component, and so can be reused anywhere else
const useResources = resource => {
  const [resources, setResources] = useState([]);
  // useEffect is a combination of componentDidMount and componentDidUpdate
  // ! the function passed to useEffect is called if:
  // ! - the elements inside the array in the second argument differ
  // ! - no argument is passed (it will not be called on re-render if an empty array is passed)
  // ! - newly created objects e.g. [{'red'}]
  // useEffect is not allowed to return a promise, so we have to pull the code out into fetchResource
  // or define an arrow function within useEffect, and immediately invoke it.
  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
      setResources(response.data);
    })(resource);
  }, [resource]);
  // useEffect(() => {
  //   fetchResource(resource);
  // }, [resource]);

  // const fetchResource = async resource => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //   setResources(response.data);
  // };
  return resources;
};

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
