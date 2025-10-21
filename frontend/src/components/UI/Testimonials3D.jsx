import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials3D.module.css';

const Testimonials3D = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container} data-testid="testimonials-3d-carousel">
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial, index) => {
            const position = index - activeIndex;
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className={`${styles.card} ${isActive ? styles.active : ''}`}
                style={{
                  '--position': position,
                }}
                data-testid={`testimonial-card-${index}`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.imageWrapper}>
                    <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
                  </div>
                  <div className={styles.quote}>"{testimonial.text}"</div>
                  <div className={styles.author}>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.location}>{testimonial.location}</div>
                    <div className={styles.company}>{testimonial.company}</div>
                  </div>
                  <div className={styles.rating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.controlBtn} data-testid="prev-testimonial-btn">
          <ChevronLeft size={24} />
        </button>
        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              data-testid={`testimonial-indicator-${index}`}
            />
          ))}
        </div>
        <button onClick={handleNext} className={styles.controlBtn} data-testid="next-testimonial-btn">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials3D;