import React from 'react';
import styles from './BrandMarquee.module.css';

const BrandMarquee = ({ brands }) => {
  return (
    <div className={styles.container} data-testid="brand-marquee">
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className={styles.item} data-testid={`brand-item-${index}`}>
              <img src={brand.logo} alt={brand.name} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;