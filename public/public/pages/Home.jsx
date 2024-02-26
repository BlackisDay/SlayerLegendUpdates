import React from 'react';
import Signup from './Signup';
import SignupPage from './SignupPage';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-title">
        <h1>Welcome to Our Website</h1>
      </header>
      <section className="home-message">
        <p>Signing up is not necessary. Feel free to explore our website!</p>
      </section>
    </div>
  );
};

export default Home;

