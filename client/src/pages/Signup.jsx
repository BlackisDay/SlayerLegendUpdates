import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import bcrypt from 'bcryptjs';

const Signup = () => {
  const [signup] = useMutation(SIGNUP);
  const [formState, setFormState] = useState({ username: '', password: '' });

  const handleFormSubmit = async event => {
    event.preventDefault();
    
    try {
      await signup({ variables: { ...formState }});
      // If signup successful, you can redirect the user to another page or show a success message
      console.log('Signup successful');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing up: ', error);
      // Handle signup error, such as displaying an error message to the user
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-container">
      <h2 className ="signup-title">Signup</h2>
      <p className="warning">DO NOT USE YOUR GAME PASSWORD</p>
      <form onSubmit={handleFormSubmit} className="signup-form">
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          className="signup-form"
        />
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="signup-form"
        />
        <button type="submit" className="signup-button">Submit</button>
      </form>
    </div>  
  );
};

export default Signup;
