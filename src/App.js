import React from 'react';
import Features from './components/Features';
import FeaturesSecond from './components/FeaturesSecond';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NewItems from './components/NewItems';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Testimonial from './components/Testimonial';

// import components

const App = () => {
  return (
    <div className='w-full max-w[1440px] mx-auto bg-white'>
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Newsletter />
      <Footer />      
    </div>
  )
};

export default App;
