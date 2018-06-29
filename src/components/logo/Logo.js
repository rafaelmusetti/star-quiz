import React from 'react';
import StarWarsLogo from './../../images/star-wars.png';

import './Logo.css';

const Logo = ({ style, width }) => {
  return (
    <div className="Logo" style={style}>
      <div className="Logo__image">
        <img src={StarWarsLogo} width={width} alt="star wars logo"/>
      </div>
      <div className="Logo__title">
        <h1>QUIZ</h1>
      </div>
    </div>
  );
};

export default Logo;