'use client'

import Navbar from './components/navbar';
import Header from './components/header';
import PopularTours from './components/popularTours';
import Stories from './components/stories';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {

 return (
  <div className="container">
   <Navbar />
   <Header />
   <PopularTours />
   <Stories />
   <Contact />
   <Footer />
  </div>
 );
}
