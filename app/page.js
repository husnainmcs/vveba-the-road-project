'use client';

import Navbar from './components/navbar';
import Header from './components/header';
import PopularTours from './components/popularTours';
import Stories from './components/stories';
import Contact from './components/contact';
import Footer from './components/footer';
import ImageGallery from './components/gallery';

export default function Home() {
 return (
  <div className="container">
   <Navbar />
   <Header />
   <PopularTours />
   <Stories />
   <ImageGallery />
   <Contact />
   <Footer />
  </div>
 );
}
