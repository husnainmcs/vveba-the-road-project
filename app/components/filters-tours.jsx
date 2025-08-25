'use client';

import React, { useState, useEffect } from 'react';

const TourFilterAndDisplay = () => {
  // Static tours array
  const staticTours = [
    {
      id: 1,
      name: "Tour Everest Base Camp",
      price: "$1500",
      details: [
        "12 days tour",
        "Sleep in tea houses",
        "Difficulty: hard",
        "Maximum altitude: 5,364m"
      ],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Tour Annapurna Circuit",
      price: "$1200",
      details: [
        "15 days tour",
        "Sleep in lodges",
        "Difficulty: medium",
        "Maximum altitude: 5,416m"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Tour Langtang Valley",
      price: "$800",
      details: [
        "7 days tour",
        "Sleep in guest houses",
        "Difficulty: easy",
        "Maximum altitude: 3,870m"
      ],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Tour Manaslu Circuit",
      price: "$1350",
      details: [
        "14 days tour",
        "Sleep in tents",
        "Difficulty: hard",
        "Maximum altitude: 5,106m"
      ],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: "Tour Upper Mustang",
      price: "$1100",
      details: [
        "10 days tour",
        "Sleep in hotels",
        "Difficulty: medium",
        "Maximum altitude: 3,840m"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      name: "Tour Kanchenjunga Base Camp",
      price: "$1800",
      details: [
        "20 days tour",
        "Sleep in tents",
        "Difficulty: extreme",
        "Maximum altitude: 5,143m"
      ],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const [filters, setFilters] = useState({
    destination: '',
    activity: '',
    minPrice: '',
    maxPrice: '',
    difficulty: ''
  });
  
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTours, setFilteredTours] = useState(staticTours);

  // Extract unique destinations, activities, and difficulties from tours
  const destinations = [...new Set(staticTours.map(tour => tour.name.split(' ').slice(1).join(' ')))];
  const activities = [...new Set(staticTours.flatMap(tour => 
    tour.details.map(detail => {
      if (detail.includes('days tour')) return 'Multi-day';
      if (detail.includes('Sleep')) return detail.replace('Sleep in ', '');
      if (detail.includes('Difficulty')) return detail.replace('Difficulty: ', '');
      return null;
    }).filter(Boolean)
  ))];
  const difficulties = ['easy', 'medium', 'hard', 'extreme'];

  // Apply filters and sorting when they change
  useEffect(() => {
    let filtered = [...staticTours];
    
    // Apply filters
    if (filters.destination) {
      filtered = filtered.filter(tour => 
        tour.name.toLowerCase().includes(filters.destination.toLowerCase())
      );
    }
    
    if (filters.activity) {
      filtered = filtered.filter(tour => 
        tour.details.some(detail => 
          detail.toLowerCase().includes(filters.activity.toLowerCase())
        )
      );
    }
    
    if (filters.minPrice) {
      const minPriceNum = parseInt(filters.minPrice.replace('$', ''));
      filtered = filtered.filter(tour => {
        const tourPrice = parseInt(tour.price.replace('$', ''));
        return tourPrice >= minPriceNum;
      });
    }
    
    if (filters.maxPrice) {
      const maxPriceNum = parseInt(filters.maxPrice.replace('$', ''));
      filtered = filtered.filter(tour => {
        const tourPrice = parseInt(tour.price.replace('$', ''));
        return tourPrice <= maxPriceNum;
      });
    }
    
    if (filters.difficulty) {
      filtered = filtered.filter(tour => 
        tour.details.some(detail => 
          detail.toLowerCase().includes(filters.difficulty.toLowerCase())
        )
      );
    }
    
    // Apply sorting
    switch(sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace('$', ''));
          const priceB = parseInt(b.price.replace('$', ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.price.replace('$', ''));
          const priceB = parseInt(b.price.replace('$', ''));
          return priceB - priceA;
        });
        break;
      case 'duration':
        filtered.sort((a, b) => {
          const daysA = parseInt(a.details[0].split(' ')[0]);
          const daysB = parseInt(b.details[0].split(' ')[0]);
          return daysB - daysA; // Longest first
        });
        break;
      default:
        // Default sorting (original order)
        break;
    }
    
    setFilteredTours(filtered);
  }, [filters, sortBy]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const resetFilters = () => {
    setFilters({
      destination: '',
      activity: '',
      minPrice: '',
      maxPrice: '',
      difficulty: ''
    });
    setSortBy('default');
  };

  return (
    <div className="tour-app">
      <h1 className="popular-tours-heading">All Tours</h1>
      <div className="sorting-filtering-bar">
        <div className="sf-controls">
          <div className="sort-controls">
            <label htmlFor="sort-by">Sort by:</label>
            <select 
              id="sort-by" 
              value={sortBy} 
              onChange={handleSortChange}
              className="sort-select"
            >
              <option value="default">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
          
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <div className="filters-panel">
            <div className="filter-group">
              <label htmlFor="destination">Destination</label>
              <select 
                id="destination" 
                name="destination" 
                value={filters.destination}
                onChange={handleFilterChange}
              >
                <option value="">All Destinations</option>
                {destinations.map((dest, index) => (
                  <option key={index} value={dest}>{dest}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="activity">Activity</label>
              <select 
                id="activity" 
                name="activity" 
                value={filters.activity}
                onChange={handleFilterChange}
              >
                <option value="">All Activities</option>
                {activities.map((activity, index) => (
                  <option key={index} value={activity}>{activity}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="difficulty">Difficulty</label>
              <select 
                id="difficulty" 
                name="difficulty" 
                value={filters.difficulty}
                onChange={handleFilterChange}
              >
                <option value="">Any Difficulty</option>
                {difficulties.map((diff, index) => (
                  <option key={index} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group price-range">
              <label>Price Range</label>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min $"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max $"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            
            <button className="reset-filters" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <div className="tours-container">
        <div className="results-count">
          {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} found
        </div>
        
        <div className="tour-cards">
          {filteredTours.map(tour => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">
                <img src={tour.image} alt={tour.name} />
                <div className="tour-price">{tour.price}</div>
              </div>
              
              <div className="tour-content">
                
                <div className="tour-details">
                  {tour.details.map((detail, index) => (
                    <div key={index} className="tour-detail">
                      {detail.includes('days tour') && (
                        <span className="detail-icon">⏱️</span>
                      )}
                      {detail.includes('Sleep') && (
                        <span className="detail-icon">🏨</span>
                      )}
                      {detail.includes('Difficulty') && (
                        <span className="detail-icon">⚡</span>
                      )}
                      {detail.includes('altitude') && (
                        <span className="detail-icon">🏔️</span>
                      )}
                      {detail}
                    </div>
                  ))}
                </div>
                
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTours.length === 0 && (
          <div className="no-results">
            <h3>No tours found matching your criteria</h3>
            <p>Try adjusting your filters to see more results</p>
            <button onClick={resetFilters} className="reset-btn">Reset All Filters</button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default TourFilterAndDisplay;