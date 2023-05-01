import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="background"></div>
      <div className="content">
        <h1>Welcome to store</h1>
        <p>High-quality, affordable products for all your needs with excellent customer service - shop with us today!</p>
        <Link to="/products"><button>Get Started</button></Link>
      </div>
    </div>
  );
}

export default Home;