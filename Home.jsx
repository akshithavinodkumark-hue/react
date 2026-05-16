import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page card animate-fade">
      <h1>Welcome to the User Dashboard</h1>
      <p>This application allows you to manage system users, view detailed profiles, and seamlessly navigate records via React Routing.</p>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => navigate('/users')}>Explore Users</button>
        <button className="btn btn-secondary" onClick={() => navigate('/about')}>Learn More</button>
      </div>
    </div>
  );
};

export default Home;