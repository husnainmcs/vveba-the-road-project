'use client';
import React, {useState} from 'react';

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

 const nextSlide = () => {
  if (!showSlider) {
   setShowSlider(true); // 🔥 pehli dafa click pe slider start hoga
  } else {
   setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }
 };

 const prevSlide = () => {
  if (showSlider) {
   setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }
 };

 return (
  <header className="header center" id="header">
   {/* Left Arrow (only works when slider is shown) */}
   <div className="arrow left" onClick={prevSlide}>
    &#10094;
   </div>

   {/* 🔹 Default Header */}
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

   {/* 🔹 Slider Header */}
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

   {/* Logo (same for both modes) */}
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
   </div>

   {/* Right Arrow → first click: activate slider, next clicks: slide */}
   <div className="arrow right" onClick={nextSlide}>
    &#10095;
   </div>
  </header>
 );
};

export default Header;

/*
import React from 'react'

const Header = () => {
  return (
   <header className="header center" id='header'>
    <div className="header-text">
     <h1 className="heading">Around the world</h1>
     <p className="header-paragraph">
      "Traveling - it leaves you speechless, then turns you into a storyteller"
     </p>
    </div>
    <img src="images/air-balloon.png" alt="Header Image" className="header-image" />
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
    </div>
   </header>
  );
}

export default Header;
*/
