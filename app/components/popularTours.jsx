'use client';

import React, {useState} from 'react';
import Image from 'next/image';

const tours = [
 {
  image: '/images/forest.jpg',
  alt: 'Forest',
  name: 'The Wild Forest',
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
  name: 'Along the River',
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
  name: 'The Island Beach',
  details: [
   '5 days tour',
   'Up to 40 people',
   '8 tour guides',
   'Sleep in hotel',
   'Difficulty: easy',
  ],
  price: '$599',
 },
 {
  image:
   'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80',
  alt: 'Mountains',
  name: 'Rocky Mountain',
  details: [
   '6 days tour',
   'Up to 25 people',
   '5 tour guides',
   'Sleep in mountain cabins',
   'Difficulty: hard',
  ],
  price: '$549',
 },
 {
  image:
   'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  alt: 'Desert',
  name: 'Desert Adventure',
  details: [
   '4 days tour',
   'Up to 15 people',
   '3 tour guides',
   'Sleep under the stars',
   'Difficulty: medium',
  ],
  price: '$349',
 },
 {
  image:
   'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
  alt: 'Jungle',
  name: 'Amazon Jungle Trek',
  details: [
   '10 days tour',
   'Up to 12 people',
   '6 tour guides',
   'Sleep in eco-lodges',
   'Difficulty: hard',
  ],
  price: '$899',
 },
 {
  image:
   'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
  alt: 'Arctic',
  name: 'Arctic Expedition',
  details: [
   '12 days tour',
   'Up to 10 people',
   '4 tour guides',
   'Stay in igloos',
   'Difficulty: extreme',
  ],
  price: '$1299',
 },
 {
  image:
   'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
  alt: 'City',
  name: 'European Capitals',
  details: [
   '14 days tour',
   'Up to 40 people',
   '2 tour guides',
   'Sleep in hotels',
   'Difficulty: easy',
  ],
  price: '$1599',
 },
 {
  image:
   'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
  alt: 'Safari',
  name: 'African Safari',
  details: [
   '8 days tour',
   'Up to 20 people',
   '5 tour guides',
   'Luxury tents & lodges',
   'Difficulty: medium',
  ],
  price: '$999',
 },
 {
  image:
   'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  alt: 'Island',
  name: 'Tropical Paradise',
  details: [
   '6 days tour',
   'Up to 30 people',
   '6 tour guides',
   'Beachfront villas',
   'Difficulty: easy',
  ],
  price: '$799',
 },
 {
  image:
   'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
  alt: 'Countryside',
  name: 'Countryside Retreat',
  details: [
   '3 days tour',
   'Up to 25 people',
   '3 tour guides',
   'Farm stays',
   'Difficulty: easy',
  ],
  price: '$299',
 },
 {
  image:
   'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
  alt: 'Volcano',
  name: 'Volcano Explorer',
  details: [
   '5 days tour',
   'Up to 15 people',
   '4 tour guides',
   'Stay in cabins',
   'Difficulty: hard',
  ],
  price: '$699',
 },
 {
  image:
   'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
  alt: 'Temple',
  name: 'Ancient Temples Tour',
  details: [
   '7 days tour',
   'Up to 35 people',
   '3 tour guides',
   'Sleep in hotels',
   'Difficulty: easy',
  ],
  price: '$749',
 },
 {
  image:
   'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
  alt: 'Canyon',
  name: 'Grand Canyon Hike',
  details: [
   '6 days tour',
   'Up to 20 people',
   '4 tour guides',
   'Camping gear included',
   'Difficulty: hard',
  ],
  price: '$899',
 },
 {
  image:
   'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
  alt: 'Northern Lights',
  name: 'Northern Lights Hunt',
  details: [
   '4 days tour',
   'Up to 18 people',
   '3 tour guides',
   'Glass igloo accommodation',
   'Difficulty: medium',
  ],
  price: '$1099',
 },
];

const PopularTours = () => {
 const [activeCards, setActiveCards] = useState(
  Array(tours.length).fill(false)
 );
 const [currentPage, setCurrentPage] = useState(1);
 const toursPerPage = 3;

 const totalPages = Math.ceil(tours.length / toursPerPage);

 const toggleCard = (index) => {
  const updated = [...activeCards];
  updated[index] = !updated[index];
  setActiveCards(updated);
 };

 const indexOfLastTour = currentPage * toursPerPage;
 const indexOfFirstTour = indexOfLastTour - toursPerPage;
 const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

 const renderCard = (tour, index) => {
  const realIndex = indexOfFirstTour + index;
  return (
   <div
    className={`card ${activeCards[realIndex] ? 'change' : ''}`}
    key={realIndex}
   >
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
     <button
      className="navigation-button"
      onClick={() => toggleCard(realIndex)}
     >
      price &gt;&gt;
     </button>
    </div>
    <div className="back-side center">
     <button
      className="navigation-button"
      onClick={() => toggleCard(realIndex)}
     >
      &lt;&lt; back
     </button>
     <h3 className="tour-price">{tour.price}</h3>
     <button className="card-button">Booking</button>
    </div>
   </div>
  );
 };

 return (
  <section className="popular-tours" id="tours">
   <h1 className="popular-tours-heading">The Most Popular Tours</h1>

   <div className="cards-wrapper">
    {currentTours.map((tour, index) => renderCard(tour, index))}
   </div>

   {/* Pagination Controls */}
   <div className="pagination">
    {Array.from({length: totalPages}, (_, i) => (
     <button
      key={i}
      className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
      onClick={() => setCurrentPage(i + 1)}
     >
      {i + 1}
     </button>
    ))}
   </div>
  </section>
 );
};

export default PopularTours;
