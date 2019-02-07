import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');
  // Keys help React identify which items have changed, are added, or are removed.
  // Keys should be given to the elements inside the array to give the elements a stable identity:
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
