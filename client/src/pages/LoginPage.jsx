import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

const LoginPage = () => {
  const [login, { loading, error }] = useMutation(LOGIN);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const {User} =await login({
        variables: { username, password } // Send plain text password
      });
      // If login successful, redirect the user to another page
      
      console.log('Login successful');
      if(User){
        window.location.href = '/';
      } 
    } catch (error) {
      console.log('Error logging in: ', error);
      // Handle login error, such as displaying an error message to the user
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Page</h1>
      <form onSubmit={handleFormSubmit} className="login-form">
        <div>
          <label htmlFor="username" className="form-label">Username:</label>
          <input className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password:</label>
          <input className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>Error: {error.message}</p>}
          <p className="NoAccount">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;