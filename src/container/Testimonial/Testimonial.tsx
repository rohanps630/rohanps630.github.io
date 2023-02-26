import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
import { BrandsData, TestimonialsData } from '../../constants/TestimonialsData';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {TestimonialsData.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={TestimonialsData[currentIndex].imgurl} alt={TestimonialsData[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{TestimonialsData[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{TestimonialsData[currentIndex].name}</h4>
                <h5 className="p-text">{TestimonialsData[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? TestimonialsData.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === TestimonialsData.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {BrandsData.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
