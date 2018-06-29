import React from 'react';
import { Card } from 'antd';
import './CardLoader.css';

const CardLoader = () => (
  <div className="CardLoader">
    <Card
      loading
      style={{ width: 300 }}
    />
  </div>
);

export default CardLoader;
