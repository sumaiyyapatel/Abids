import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: options.y || 60,
          scale: options.scale || 1
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration || 1,
          delay: (options.stagger || 0.1) * index,
          ease: options.ease || 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: options.start || 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [selector, options]);
};

export const useHeroAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      '.hero-title',
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(
      '.hero-cta',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, []);
};