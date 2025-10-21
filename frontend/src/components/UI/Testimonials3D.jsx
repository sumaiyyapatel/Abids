import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials3D.module.css';

const Testimonials3D = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.querySelectorAll(`.${styles.card}`);
    const totalCards = cards.length;
    const angleStep = 360 / totalCards;
    const radius = 400;

    cards.forEach((card, index) => {
      const angle = (angleStep * index - activeIndex * angleStep) * (Math.PI / 180);
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const scale = z > 0 ? 1 : 0.8;
      const opacity = z > 0 ? 1 : 0.5;

      gsap.to(card, {
        x: x,
        z: z,
        scale: scale,
        opacity: opacity,
        rotationY: -angle * (180 / Math.PI),
        duration: 0.8,
        ease: 'power2.out',
        zIndex: z > 0 ? 10 : 1
      });
    });
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container} data-testid="testimonials-3d-carousel">
      <div className={styles.scene}>
        <div ref={carouselRef} className={styles.carousel}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card} data-testid={`testimonial-card-${index}`}>
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
          ))}
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