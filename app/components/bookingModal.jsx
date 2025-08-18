'use client';

import React from 'react';
import Image from 'next/image';

const BookingModal = ({tour, onClose}) => {
 if (!tour) return null;

 return (
  <div className="modal-overlay">
   <div className="modal-container">
    <button className="modal-close" onClick={onClose}>
     ✖
    </button>

    <div className="modal-header">
     <Image
      src={tour.image}
      alt={tour.alt}
      width={400}
      height={250}
      className="modal-image"
     />
     <h2 className="modal-title">{tour.name}</h2>
    </div>

    <ul className="modal-details">
     {tour.details.map((item, i) => (
      <li key={i}>{item}</li>
     ))}
    </ul>

    <h3 className="modal-price">{tour.price}</h3>

    <form className="modal-form">
     <input type="text" placeholder="Your Name" required />
     <input type="email" placeholder="Your Email" required />
     <input type="number" placeholder="No. of People" min="1" required />
     <button
      type="button"
      className="modal-submit"
      onClick={() => window.toast('Tour booked successfully!', 'success')}
    //   onClick={() => window.toast('Some thing wont wrong!', 'error')}
     >
      Confirm Booking
     </button>
    </form>
   </div>
  </div>
 );
};

export default BookingModal;
