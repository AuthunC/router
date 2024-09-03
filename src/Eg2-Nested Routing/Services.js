// Services.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const WebDevelopment = () => <h3>Web Development</h3>;
const AppDevelopment = () => <h3>App Development</h3>;

const Services = () => {
  return (
    <div>
      <h2>Services - Nested Route Example</h2>
      <ul>
        <li>
          <Link to="web-development">Web Development</Link>
        </li>
        <li>
          <Link to="app-development">App Development</Link>
        </li>
        
      </ul>
      <Routes>
        <Route path="web-development" element={<WebDevelopment />} />
        <Route path="app-development" element={<AppDevelopment />} />
      </Routes>
    </div>
  );
};

export default Services;
