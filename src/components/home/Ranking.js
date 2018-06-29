import React from 'react';
import Logo from './../logo/Logo';

import './Ranking.css';

const Ranking = ({ nickname, score }) => {
  return (
    <div className="Ranking">
      <div className="Ranking__content">
        <Logo width={400} />
        <h2>{nickname}: {score}</h2>
        <h3>
          Thanks for playing Star Wars Quiz!
        </h3>
      </div>
    </div>
  );
};

export default Ranking;