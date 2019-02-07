import { useState, useEffect } from 'react';
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

export default useResources;
