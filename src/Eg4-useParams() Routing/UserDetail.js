import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const users = {
    1: { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    2: { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    3: { id: 3, name: 'Alice Johnson', age: 35, email: 'alice@example.com' }
  };

  const user = users[id];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
