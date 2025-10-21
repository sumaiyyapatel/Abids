import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './BrandMarquee.module.css';

const BrandMarquee = ({ brands }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const items = marquee.querySelectorAll(`.${styles.item}`);
    const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth, 0);

    gsap.to(marquee, {
      x: -totalWidth / 2,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
      }
    });
  }, [brands]);

  return (
    <div className={styles.container} data-testid="brand-marquee">
      <div ref={marqueeRef} className={styles.marquee}>
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className={styles.item} data-testid={`brand-item-${index}`}>
            <img src={brand.logo} alt={brand.name} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;