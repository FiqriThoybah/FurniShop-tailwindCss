import React from 'react';

// import data 
import { testimonial } from '../data';
// import components
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  const { image, title } = testimonial;
  // console.log("lihat isi testimonial :", testimonial);
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div className='lg:max-w-[50%]'>
            {/* title */}
            <h2 className='title mb-9'>{title}</h2>
            {/* slider */}
            <TestimonialSlider />
          </div>
          {/* image */}
          <div className='order-1'>
            <img src={image.type} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
