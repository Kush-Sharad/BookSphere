import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import image1 from '../Images/cse.png'
import image2 from '../Images/electronics.jpg'
import image3 from '../Images/electrical.jpg'
import image4 from '../Images/mech.jpg'
import image5 from '../Images/civil.jpg'
import image6 from '../Images/chemistry.jpg'


const cards = [
  { title: 'Computer Science Engineering', 
    image: image1,
    buttonText: 'Click Here',
    page: '/computer'
  },
  { title: 'Electronics Engineering', 
    image: image2,
    buttonText: 'Click Here',
    page: '/electronics'
  },
  { title: 'Electrical Engineering', 
    image: image3,
    buttonText: 'Click Here',
    page: '/electrical'
  },
  { title: 'Mechanical Engineering',
    image: image4,
    buttonText: 'Click Here',
    page: '/mechanical'
  },
  { title: 'Civil Engineering', 
    image: image5,
    buttonText: 'Click Here',
    page: '/civil'
  },
  { title: 'Chemical Engineering', 
    image: image6,
    buttonText: 'Click Here',
    page: '/chemical'
  },
  // Add more cards as needed
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows : false,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.title} className="card">
            <div className="image-container">
              <img src={card.image} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <Link to={card.page}>
              <button>{card.buttonText}</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
