import React  from 'react';
import { Link } from 'react-router-dom';

import appimage from './Images/app.png'
import webimage from './Images/web.jpg'
import mlimage from './Images/ml.jpg'

const Services = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: webimage,
      page: '/Webdevelopment'
    },
    {
      id: 2,
      imageSrc: appimage,
      page: '/Appdevelopment'
    },
    {
      id: 3,
      imageSrc: mlimage,
      page: '/Machinelearning'
    },
    // Add more card data as needed
  ];

  return (
    <div className="service-container">
      <h1>Learn with Us</h1>
      {cardData.map((card) => (
        <div className="service-card">
          <Link to={card.page}>
            <img src={card.imageSrc} alt="Product" className="bookcard-image" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;