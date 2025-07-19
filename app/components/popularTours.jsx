'use client';

import React, {useState} from 'react';
import Image from 'next/image';

const tours = [
 {
  image: '/images/forest.jpg',
  alt: 'Forest',
  name: 'The wild forest',
  details: [
   '7 days tour',
   'Up to 20 people',
   '4 tour guides',
   'Sleep in private tents',
   'Difficulty: medium',
  ],
  price: '$399',
 },
 {
  image: '/images/river.jpg',
  alt: 'River',
  name: 'Along the river',
  details: [
   '9 days tour',
   'Up to 30 people',
   '7 tour guides',
   'Sleep in private tents',
   'Difficulty: hard',
  ],
  price: '$499',
 },
 {
  image: '/images/sea.jpg',
  alt: 'Sea',
  name: 'The island beach',
  details: [
   '5 days tour',
   'Up to 40 people',
   '8 tour guides',
   'Sleep in hotel',
   'Difficulty: easy',
  ],
  price: '$599',
 },
];

const PopularTours = () => {
 const [activeCards, setActiveCards] = useState(
  Array(tours.length).fill(false)
 );

 const toggleCard = (index) => {
  const updated = [...activeCards];
  updated[index] = !updated[index];
  setActiveCards(updated);
 };

 const renderCard = (tour, index) => (
  <div className={`card ${activeCards[index] ? 'change' : ''}`} key={index}>
   <div className="front-side">
    <Image
     src={tour.image}
     alt={tour.alt}
     className="card-image"
     width={300}
     height={200}
    />
    <h1 className="tour-name">{tour.name}</h1>
    <ul className="card-list">
     {tour.details.map((item, i) => (
      <li key={i} className="card-list-item">
       {item}
      </li>
     ))}
    </ul>
    <button className="navigation-button" onClick={() => toggleCard(index)}>
     price &gt;&gt;
    </button>
   </div>
   <div className="back-side center">
    <button className="navigation-button" onClick={() => toggleCard(index)}>
     &lt;&lt; back
    </button>
    <h3 className="tour-price">{tour.price}</h3>
    <button className="card-button">Booking</button>
   </div>
  </div>
 );

 return (
  <section className="popular-tours" id="tours">
   <h1 className="popular-tours-heading">The Most Popular Tours</h1>
   <div className="cards-wrapper">{tours.map(renderCard)}</div>
  </section>
 );
};

export default PopularTours;
