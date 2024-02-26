import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error }] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({ variables: { username, password } });
      // Handle successful login here (e.g., redirect user)
      console.log(data);
    } catch (err) {
      // Handle error here (e.g., display error message)
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>Error: {error.message}</p>}
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      <p className="NoAccount">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
