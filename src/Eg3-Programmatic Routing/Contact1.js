import React from 'react';
import { useNavigate } from 'react-router-dom';

//This uses useNavigate to go to homepage after 
//clicking the submit button by handleSubmit()
const Contact1 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    navigate('/');
  };

  return (
    <div>
      <h2>Contact Page - useNavigate Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact1;
