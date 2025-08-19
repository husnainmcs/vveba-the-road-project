"use client";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

export default function ImageGallery() {
  const images = [
   {
    src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
    className: 'big',
   },
   {
    src: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
    className: 'tall',
   },
   {
    src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
    className: 'wide',
   },
   {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
   },
   {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
   },
   {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
    className: 'wide',
   },
   {
    src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
   },
   {
    src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    thumbnail:
     'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=60',
    width: 1200,
    height: 800,
    className: 'wide',
   },
  ];

  return (
   <section className="popular-tours" id="gallery">
    <h1 className="popular-tours-heading">Tours Gallery</h1>
    <Gallery>
     <div className="gallery-container">
      {images.map((img, index) => (
       <Item
        key={index}
        original={img.src}
        thumbnail={img.thumbnail}
        width={img.width}
        height={img.height}
       >
        {({ref, open}) => (
         <div
          className={`gallery-item ${img.className || ''}`}
          ref={ref}
          onClick={open}
         >
          <img src={img.thumbnail} alt="tour image" />
         </div>
        )}
       </Item>
      ))}
     </div>
    </Gallery>
   </section>
  );
}
