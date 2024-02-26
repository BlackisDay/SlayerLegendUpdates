import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [login, { error }] = useMutation(LOGIN);
  const [formState, setFormState] = useState({ username: '', password: '' });

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { username: formState.username, password: formState.password }
      });
      // Assuming successful login, redirect to home page
      window.location.replace('/'); // Redirect to home page
    } catch (err) {
      console.error('Error logging in:', err);
      // Handle error, such as displaying error message to user
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {error && <p>Error: {error.message}</p>}
      </form>
      <p className = "NoAccount">Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginPage;
