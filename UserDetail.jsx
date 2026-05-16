import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockUsers } from './Users';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the specific user from the mock data array
  const user = mockUsers.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="page card text-center">
        <h2>User Not Found</h2>
        <p>The requested user ID does not exist in our registry.</p>
        <button className="btn btn-primary" onClick={() => navigate('/users')}>Back to Users</button>
      </div>
    );
  }

  return (
    <div className="page card profile-card animate-slide-up">
      <button className="btn-back" onClick={() => navigate('/users')}>← Back to Users</button>
      <div className="profile-header">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <div>
          <h2>{user.name}</h2>
          <span className="badge">{user.role}</span>
        </div>
      </div>
      <hr />
      <div className="profile-details">
        <p><strong>User ID:</strong> #{user.id}</p>
        <p><strong>Email Address:</strong> {user.email}</p>
        <p><strong>Account Status:</strong> <span className={`status-${user.status.toLowerCase()}`}>{user.status}</span></p>
      </div>
    </div>
  );
};

export default UserDetail;