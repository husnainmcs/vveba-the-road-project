'use client';

import React from 'react';
import Image from 'next/image';

const stories = [
 {
  image: '/images/story-img-1.jpg',
  heading: 'These were the best days of this year',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
           quas, repudiandae veritatis nam mollitia cumque distinctio, quia
           aperiam aliquid at consequuntur libero quisquam facilis laborum
           inventore repellat perspiciatis vel fugiat molestias recusandae eum
           necessitatibus quo possimus aspernatur? Nobis, architecto eaque.`,
 },
 {
  image: '/images/story-img-2.jpg',
  heading: 'I enjoyed this great tour',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
           quas, repudiandae veritatis nam mollitia cumque distinctio, quia
           aperiam aliquid at consequuntur libero quisquam facilis laborum
           inventore repellat perspiciatis vel fugiat molestias recusandae eum
           necessitatibus quo possimus aspernatur? Nobis, architecto eaque. ALi`,
 },
];

const Stories = () => {
 const renderStory = (story, index) => (
  <div className="story-bg" key={index}>
   <div className="story">
    <Image
     src={story.image}
     alt="Customer image"
     className="story-image"
     width={120}
     height={120}
    />
    <div className="story-text">
     <h1 className="story-heading">{story.heading}</h1>
     <p className="story-paragraph">{story.description}</p>
    </div>
   </div>
  </div>
 );

 return (
  <section className="stories" id="stories">
   <div className="video-container">
    <video className="bg-video" autoPlay muted loop>
     <source src="/images/video.mp4" type="video/mp4" />
    </video>
   </div>
   <div className="stories-wrapper">{stories.map(renderStory)}</div>
  </section>
 );
};

export default Stories;
