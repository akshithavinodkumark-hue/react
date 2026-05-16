import React from 'react';
import { Link } from 'react-router-dom';

// Shared Mock Data (Usually fetched from an API)
export const mockUsers = [
  { id: 1, name: 'Akshitha', email: 'akshitha@example.com', role: 'Administrator', status: 'Active' },
  { id: 2, name: 'Akshaya', email: 'akshaya@example.com', role: 'Project Manager', status: 'Active' },
  { id: 3, name: 'Lipin', email: 'lipin@example.com', role: 'UX Designer', status: 'Away' },
  { id: 4, name: 'Nyrah', email: 'nyrah@example.com', role: 'DevOps Engineer', status: 'Offline' }
];

const Users = () => {
  return (
    <div className="page">
      <h1>Registered Users</h1>
      <div className="user-grid">
        {mockUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <Link to={`/users/${user.id}`} className="btn btn-sm btn-outline">
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;