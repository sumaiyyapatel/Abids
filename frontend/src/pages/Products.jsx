import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import ProductCard from '@/components/UI/ProductCard';
import Modal from '@/components/UI/Modal';
import styles from './Products.module.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  useScrollReveal('.reveal', { y: 60, stagger: 0.1 });

  const categories = [
    {
      name: 'Display Counters',
      products: [
        {
          id: 1,
          title: 'Vertical Cake Display',
          description: 'Premium glass display counter for bakeries',
          image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
          details: 'Temperature controlled display with LED lighting and glass panels.'
        },
        {
          id: 2,
          title: 'Sweet Display Counter',
          description: 'Perfect for sweet shops and confectioneries',
          image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800',
          details: 'Multi-tier display with energy-efficient cooling system.'
        },
        {
          id: 3,
          title: 'Deli Counter',
          description: 'Ideal for deli items and cold cuts',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
          details: 'Spacious storage with temperature control and stainless steel finish.'
        }
      ]
    },
    {
      name: 'Kitchen Equipment',
      products: [
        {
          id: 4,
          title: 'Commercial Refrigerator',
          description: 'Heavy-duty refrigeration for restaurants',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
          details: 'Large capacity with multiple compartments and precise temperature control.'
        },
        {
          id: 5,
          title: 'Prep Tables',
          description: 'Stainless steel preparation tables',
          image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800',
          details: 'Hygienic food-grade steel with built-in storage and cooling.'
        },
        {
          id: 6,
          title: 'Blast Freezer',
          description: 'Rapid freezing for food preservation',
          image: 'https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=800',
          details: 'Quick freeze technology for maximum freshness retention.'
        }
      ]
    },
    {
      name: 'Food Carts',
      products: [
        {
          id: 7,
          title: 'Mobile Food Cart',
          description: 'Portable solution for street vendors',
          image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
          details: 'Lightweight design with storage compartments and canopy.'
        },
        {
          id: 8,
          title: 'Juice Counter',
          description: 'Specialized cart for beverages',
          image: 'https://images.unsplash.com/photo-1594576722512-582bcd46fce4?w=800',
          details: 'Chiller compartment with display area for fruits.'
        }
      ]
    }
  ];

  return (
    <div className={styles.products} data-testid="products-page">
      <section className={styles.hero} data-testid="products-hero">
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="reveal">Our Products</h1>
          <p className="reveal">Quality equipment for every business need</p>
        </div>
      </section>

      {categories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className={`${styles.category} reveal`}
          data-testid={`category-${categoryIndex}`}
        >
          <div className={styles.container}>
            <div className={styles.categoryHeader}>
              <h2>{category.name}</h2>
            </div>
            <div className={styles.productsGrid}>
              {category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.title}
        >
          <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
          <p>{selectedProduct.details}</p>
          <p style={{ marginTop: '1rem', color: '#D72638', fontWeight: 600 }}>
            Contact us for pricing and customization options
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Products;