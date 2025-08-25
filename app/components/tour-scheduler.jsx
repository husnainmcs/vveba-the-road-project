'use client';

import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const DatePickerWithPricing = () => {
  // Static tours data
  const tours = [
    {
      id: 1,
      name: "Everest Base Camp Trek",
      basePrice: 1500,
      duration: "12 days",
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Annapurna Circuit Trek",
      basePrice: 1200,
      duration: "15 days",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      name: "Langtang Valley Trek",
      basePrice: 800,
      duration: "7 days",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Langtang Valley Trek",
      basePrice: 900,
      duration: "7 days",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Peak season dates with multipliers (format: YYYY-MM-DD)
  const peakSeasonDates = {
    '2024-03-01': 1.25, // 25% higher
    '2024-03-02': 1.25,
    '2024-03-03': 1.25,
    '2024-03-15': 1.5,  // 50% higher
    '2024-03-16': 1.5,
    '2024-03-17': 1.5,
    '2024-04-10': 1.75, // 75% higher
    '2024-04-11': 1.75,
    '2024-04-12': 1.75,
    '2024-04-13': 1.75,
    '2024-04-14': 1.75,
    '2024-04-15': 1.75,
    '2024-10-20': 1.5,  // 50% higher
    '2024-10-21': 1.5,
    '2024-10-22': 1.5,
    '2024-10-23': 1.5,
    '2024-11-05': 1.25, // 25% higher
    '2024-11-06': 1.25,
    '2024-11-07': 1.25,
  };

  // Special discount dates
  const discountDates = {
    '2024-05-15': 0.8,  // 20% discount
    '2024-05-16': 0.8,
    '2024-05-17': 0.8,
    '2024-09-01': 0.75, // 25% discount
    '2024-09-02': 0.75,
    '2024-09-03': 0.75,
    '2024-11-20': 0.85, // 15% discount
    '2024-11-21': 0.85,
    '2024-11-22': 0.85,
  };

  const [selectedTour, setSelectedTour] = useState(tours[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [finalPrice, setFinalPrice] = useState(tours[0].basePrice);
  const [priceModifier, setPriceModifier] = useState(1);
  const [priceMessage, setPriceMessage] = useState("Regular season pricing");

  // Calculate price when date or tour changes
  useEffect(() => {
    if (selectedDate) {
      const dateStr = selectedDate.toISOString().split('T')[0];
      let modifier = 1;
      let message = "Regular season pricing";
      
      if (peakSeasonDates[dateStr]) {
        modifier = peakSeasonDates[dateStr];
        message = "Peak season pricing";
      } else if (discountDates[dateStr]) {
        modifier = discountDates[dateStr];
        message = "Special discount pricing";
      }
      
      setPriceModifier(modifier);
      setPriceMessage(message);
      setFinalPrice(Math.round(selectedTour.basePrice * modifier));
    } else {
      setFinalPrice(selectedTour.basePrice);
      setPriceModifier(1);
      setPriceMessage("Select a date to see final price");
    }
  }, [selectedDate, selectedTour]);

  // Function to handle tour selection
  const handleTourSelect = (tour) => {
    setSelectedTour(tour);
    setSelectedDate(null); // Reset date when tour changes
  };

  // Function to handle date selection
  const handleDateSelect = (dates) => {
    if (dates.length > 0) {
      setSelectedDate(dates[0]);
    }
  };

  return (
    <div className="date-picker-container">
      <h1 className="popular-tours-heading">Tours Booking</h1>
      <div className="tour-selection">
        <h2>Select Your Tour</h2>
        <div className="tour-cards">
          {tours.map(tour => (
            <div 
              key={tour.id} 
              className={`tour-card ${selectedTour.id === tour.id ? 'selected' : ''}`}
              onClick={() => handleTourSelect(tour)}
            >
              <img src={tour.image} alt={tour.name} />
              <div className="tour-info">
                <h3>{tour.name}</h3>
                <div className="tour-details">
                  <span>⏱️ {tour.duration}</span>
                  <span>⚡ {tour.difficulty}</span>
                  <span className="price">${tour.basePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="date-picker-card">
        <h3>Select Your Tour Date for {selectedTour.name}</h3>
        <p className="picker-subtitle">Prices vary by season - select a date to see the price</p>
        
        <div className="calendar-container">
          <Flatpickr
            value={selectedDate}
            onChange={handleDateSelect}
            options={{
              minDate: 'today',
              inline: true,
              onDayCreate: function(dObj, dStr, fp, dayElem) {
                // Add pricing information to each day
                const date = new Date(dayElem.dateObj);
                const dateStr = date.toISOString().split('T')[0];
                
                if (peakSeasonDates[dateStr]) {
                  dayElem.classList.add('peak-date');
                } else if (discountDates[dateStr]) {
                  dayElem.classList.add('discount-date');
                }
                
                // Add price indicator
                const priceIndicator = document.createElement('span');
                priceIndicator.className = 'price-indicator';
                
                if (peakSeasonDates[dateStr]) {
                  priceIndicator.textContent = `$${Math.round(selectedTour.basePrice * peakSeasonDates[dateStr])}`;
                  priceIndicator.classList.add('peak-price');
                } else if (discountDates[dateStr]) {
                  priceIndicator.textContent = `$${Math.round(selectedTour.basePrice * discountDates[dateStr])}`;
                  priceIndicator.classList.add('discount-price');
                } else {
                  priceIndicator.textContent = `$${selectedTour.basePrice}`;
                }
                
                dayElem.appendChild(priceIndicator);
              }
            }}
            className="custom-flatpickr"
          />
        </div>
        
        <div className="price-summary">
          <div className="price-breakdown">
            <div className="breakdown-row">
              <span>Base Price:</span>
              <span>${selectedTour.basePrice}</span>
            </div>
            {selectedDate && priceModifier !== 1 && (
              <div className="breakdown-row">
                <span>{priceMessage}:</span>
                <span className={priceModifier > 1 ? 'price-increase' : 'price-decrease'}>
                  {priceModifier > 1 ? '+' : ''}{Math.round((priceModifier - 1) * 100)}%
                </span>
              </div>
            )}
            <div className="breakdown-row final-price">
              <span>Total Price:</span>
              <span>${finalPrice}</span>
            </div>
          </div>
          
          {selectedDate && (
            <button className="book-now-btn">
              Book Now for ${finalPrice}
            </button>
          )}
        </div>
      </div>
      
      <div className="legend">
        <div className="legend-item">
          <span className="legend-color regular-price"></span>
          <span>Regular Price (${selectedTour.basePrice})</span>
        </div>
        <div className="legend-item">
          <span className="legend-color peak-price"></span>
          <span>Peak Season (Higher Price)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color discount-price"></span>
          <span>Discount (Lower Price)</span>
        </div>
      </div>
    </div>
  );
};

export default DatePickerWithPricing;