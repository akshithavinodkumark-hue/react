import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page card">
      <h1>About This Application</h1>
      <p>Built as a multi-page React single-page application (SPA), this project highlights dynamic routing, state simulation, and custom user experience flows using functional components.</p>
      <p><strong>Tech Stack:</strong> React, React Router v6, CSS3 Custom Properties.</p>
      <Link to="/" className="btn btn-secondary">← Back to Home</Link>
    </div>
  );
};

export default About;