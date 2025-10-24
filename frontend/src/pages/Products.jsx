import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import ProductCard from '@/components/UI/ProductCard';
import Modal from '@/components/UI/Modal';
import { Loader2 } from 'lucide-react';
import styles from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  
  useScrollReveal('.reveal', { y: 60, stagger: 0.1 });

  const categories = [
    { name: 'Display Counters', id: 'Display Counters' },
    { name: 'Kitchen Equipment', id: 'Kitchen Equipment' },
    { name: 'Food Carts', id: 'Food Carts' }
  ];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const productsSnap = await getDocs(collection(db, 'products'));
      const productsData = productsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error loading products:', error);
    }
    setLoading(false);
  };

  const getProductsByCategory = (categoryName) => {
    return products.filter(product => product.category === categoryName);
  };

  if (loading) {
    return (
      <div className={styles.products}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Our Products</h1>
            <p>Premium Refrigeration Solutions for Every Need</p>
          </div>
        </section>
        <div className={styles.loadingContainer}>
          <Loader2 className={styles.spinner} size={48} />
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.products}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Our Products</h1>
          <p>Premium Refrigeration Solutions for Every Need</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className={styles.catalogueSection}>
        <div className={styles.container}>
          <div className={styles.tabsContainer}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            <div className={styles.productsGrid}>
              {getProductsByCategory(categories[activeTab].id).length > 0 ? (
                getProductsByCategory(categories[activeTab].id).map((product) => (
                  <div key={product.id} className="reveal">
                    <ProductCard
                      image={product.image || 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800'}
                      title={product.title}
                      description={product.description}
                      onClick={() => setSelectedProduct(product)}
                    />
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <p>No products in this category yet.</p>
                  <p className={styles.emptySubtext}>Check back soon!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <Modal 
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.title}
        >
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.title} 
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <p style={{ marginBottom: '1rem' }}><strong>Description:</strong> {selectedProduct.description}</p>
          {selectedProduct.details && (
            <p><strong>Details:</strong> {selectedProduct.details}</p>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Products;