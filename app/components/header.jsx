'use client';
import React, {useState, useEffect} from 'react';

const slides = [
 {
  title: 'Discover New Places',
  text: `"The journey of a thousand miles begins with a single step"`,
  image: 'images/air-balloon.png',
 },
 {
  title: 'Adventure Awaits',
  text: `"Life is short and the world is wide"`,
  image: 'images/air-balloon2.png',
 },
 {
  title: 'Around the World',
  text: `"Traveling - it leaves you speechless, then turns you into a storyteller"`,
  image: 'images/air-balloon3.png',
 },
];

const Header = () => {
 const [showSlider, setShowSlider] = useState(false);
 const [current, setCurrent] = useState(0);
 const [wishlist, setWishlist] = useState([]);
 const [showWishlist, setShowWishlist] = useState(false);

 // Load wishlist from localStorage on component mount and set up listener
 useEffect(() => {
  const loadWishlist = () => {
   const savedWishlist = localStorage.getItem('tourWishlist');
   if (savedWishlist) {
    setWishlist(JSON.parse(savedWishlist));
   }
  };
  
  // Load initially
  loadWishlist();
  
  // Listen for storage events (for updates from other tabs/windows)
  const handleStorageChange = (e) => {
   if (e.key === 'tourWishlist') {
    loadWishlist();
   }
  };
  
  // Listen for custom events (for updates in same tab)
  const handleWishlistUpdate = () => {
   loadWishlist();
  };
  
  window.addEventListener('storage', handleStorageChange);
  window.addEventListener('wishlistUpdated', handleWishlistUpdate);
  
  return () => {
   window.removeEventListener('storage', handleStorageChange);
   window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
  };
 }, []);

 const nextSlide = () => {
  if (!showSlider) {
   setShowSlider(true);
  } else {
   setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }
 };

 const prevSlide = () => {
  if (showSlider) {
   setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }
 };

 const toggleWishlistDropdown = () => {
  setShowWishlist(!showWishlist);
 };

 // Close dropdown when clicking outside
 useEffect(() => {
  const handleClickOutside = (e) => {
   if (showWishlist && !e.target.closest('.wishlist-container')) {
    setShowWishlist(false);
   }
  };
  
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
  };
 }, [showWishlist]);

 return (
  <header className="header center" id="header">
   {/* Left Arrow */}
   <div className="arrow left" onClick={prevSlide}>
    &#10094;
   </div>

   {/* Default Header */}
   {!showSlider && (
    <>
     <div className="header-text">
      <h1 className="heading">Around the World</h1>
      <p className="header-paragraph">
       "Traveling - it leaves you speechless, then turns you into a storyteller"
      </p>
     </div>
     <img
      src="/images/air-balloon.png"
      alt="Header Slide"
      className="header-image"
     />
    </>
   )}

   {/* Slider Header */}
   {showSlider && (
    <>
     <div className="header-text">
      <h1 className="heading">{slides[current].title}</h1>
      <p className="header-paragraph">{slides[current].text}</p>
     </div>
     <img
      src={slides[current].image}
      alt="Header Slide"
      className="header-image"
     />
    </>
   )}

   {/* Logo */}
   <div className="logo">
    <h1>
     <span className="center">t</span>
     <span className="center">h</span>
     <span className="center">e</span>
     <span className="center">r</span>
     <span className="center">o</span>
     <span className="center">a</span>
     <span className="center">d</span>
    </h1>

   <div className="wishlist-container">
    <div className="wishlist-counter" onClick={toggleWishlistDropdown}>
     <span className="heart-icon">♥</span>
     <span className="wishlist-count">{wishlist.length}</span>
    </div>
    
    {showWishlist && (
     <div className="wishlist-dropdown">
      <h3 className="wishlist-title">Your Wishlist</h3>
      {wishlist.length > 0 ? (
       <ul className="wishlist-items">
        {wishlist.map((tourName, index) => (
         <li key={index} className="wishlist-item">
          {tourName}
         </li>
        ))}
       </ul>
      ) : (
       <p className="wishlist-empty">No tours in your wishlist yet</p>
      )}
     </div>
    )}
   </div>
   </div>



   {/* Right Arrow */}
   <div className="arrow right" onClick={nextSlide}>
    &#10095;
   </div>
  </header>
 );
};

export default Header;