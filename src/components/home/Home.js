import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import Logo from './../logo/Logo';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__content">
        <Logo width={400} />
        <div className="Home__content__description">
          Do you know the Star Wars characters? Yes? Then show us! 
          With <b className="Home__content__description--quiz-name">Star Wars Quiz</b> you will have the 
          opportunity to identify the main characters in Star Wars, score points and become a 
          powerful Jedi <b>(or Sith)</b>!
        </div>
        <div className="Home__content__button">
          <Link to="/game">
            <Button type="primary" size="large">
              PLAY!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;