import React, { useState } from 'react';
import ResourceList from './ResourceList';
const App = () => {
  // array destructuring
  // the names 'resource' and 'setResource' can be whatever we want
  // the value passed to useState() is the initial value
  const [resource, setResource] = useState('posts');

  return (
    <>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </>
  );
};

export default App;

// export default class App extends Component {
//   // static propTypes = {
//   //   prop: PropTypes
//   // }
//   state = { resource: 'posts' };

//   render() {
//     return (
//       <>
//         <div>
//           <button onClick={() => this.setState({ resource: 'posts' })}>Posts</button>
//           <button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>
//         </div>
//       </>
//     );
//   }
// }
