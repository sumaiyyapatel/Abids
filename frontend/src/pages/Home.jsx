import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal, useHeroAnimation } from '@/hooks/useGsapAnimations';
import { useScreenshotProtection } from '@/hooks/useScreenshotProtection';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials3D from '@/components/UI/Testimonials3D';
import BrandMarquee from '@/components/UI/BrandMarquee';
import ProductCard from '@/components/UI/ProductCard';
import styles from './Home.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

const Home = () => {
  const { t } = useTranslation();
  useHeroAnimation();
  useScrollReveal('.reveal', { y: 80, stagger: 0.15 });
  useScreenshotProtection();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'testimonials'));
        setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);


  const stats = [
    { value: '28+', label: t('Years Experience') },
    { value: '5000+', label: t('Happy Customers') },
    { value: '15+', label: t('Cities Served') },
    { value: '2+', label: t('Countries') }
  ];

  const features = [
    {
      title: t('Food Carts'),
      description: t('Custom-built food carts designed for mobile kitchens with style and durability.'),
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
      title: t('Display Counters'),
      description: t('Premium display counters to preserve freshness and enhance visual appeal.'),
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800'
    },
    {
      title: t('Kitchen Equipment'),
      description: t('High-performance commercial kitchen solutions for restaurants and hotels.'),
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800'
    }
  ];



  const brands = [
    { name: 'Haldiram', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
    { name: 'Theobroma', logo: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200&h=100&fit=crop' },
    { name: 'Ajit Bakery', logo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=100&fit=crop' },
    { name: 'Delice', logo: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=100&fit=crop' },
    { name: 'Dhorajwala', logo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=100&fit=crop' }
  ];

  const whyChoose = [
    {
      title: t('Advanced Cooling Technology'),
      description: t('Modern refrigeration systems that save power and preserve quality.')
    },
    {
      title: t('Timely Delivery & Installation'),
      description: t('Professional installation with no delays, just dependable service.')
    },
    {
      title: t('24/7 Support'),
      description: t('Reliable support even after delivery for maintenance and breakdowns.')
    },
    {
      title: t('Customized Solutions'),
      description: t('Every counter is made to match your business layout and goals.')
    }
  ];

  return (
    <div className={styles.home} data-testid="home-page">
      {/* Hero Section */}
      <section className={styles.hero} data-testid="hero-section">
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero-title" data-testid="hero-title">
              <span className={styles.heroSubtext}>{t('Experience the Art of')}</span>
              <span className={styles.heroMainText}>{t('Precision Cooling')}</span>
              <span className={styles.heroAccent}>{t('with ABID REFRIGERATION AND ENGINEERING')}</span>
            </h1>
            <p className="hero-subtitle" data-testid="hero-subtitle">
              {t('Powering Professional Kitchens with Quality Equipment Since 1996')}
            </p>
            <Link
              to="/contact"
              className={`${styles.learnMore} hero-cta`}
              data-testid="hero-contact-btn"
            >
              {t('Contact Us Now')} <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.stats} reveal`} data-testid="stats-section">
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard} data-testid={`stat-card-${index}`}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`${styles.about} reveal`} data-testid="about-preview-section">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <img
                src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2-5-scaled.png"
                alt="Abid Factory"
              />
            </div>
            <div className={styles.aboutContent}>
              <h2>{t('ABID REFRIGERATION & ENGINEERING PRIVATE LIMITED')}</h2>
              <p>
                {t('Founded in 1996 at Nagpur, Maharashtra, Abid Refrigeration is a renowned manufacturer of Display Counters, Commercial Kitchen Products, and Food Carts. We use 304 Food Grade raw materials and sophisticated technology to meet global standards.')}
              </p>
              <p>
                {t('Our products are acknowledged for supreme quality, durability, fine finish, reliability, and easy installation. We offer standard and customized solutions to meet your precise requirements.')}
              </p>
              <Link to="/about" className={styles.learnMore} data-testid="learn-more-btn">
                {t('Learn More')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={`${styles.products} reveal`} data-testid="products-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('What We Build')}</h2>
            <p>{t('Quality equipment tailored for your business needs')}</p>
          </div>
          <div className={styles.productsGrid}>
            {features.map((feature, index) => (
              <ProductCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                onClick={() => window.location.href = '/products'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.whyChoose} reveal`} data-testid="why-choose-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Why Choose Us?')}</h2>
          </div>
          <div className={styles.whyGrid}>
            {whyChoose.map((item, index) => (
              <div key={index} className={styles.whyCard} data-testid={`why-card-${index}`}>
                <CheckCircle className={styles.whyIcon} size={32} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Brand Marquee */}
      <section className={styles.brands} data-testid="brands-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Trusted by Leading Brands')}</h2>
          </div>
        </div>
        <BrandMarquee brands={brands} />
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} reveal`} data-testid="testimonials-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('What Our Clients Say')}</h2>
            <p>{t('Trusted by businesses across India')}</p>
          </div>
          <Testimonials3D testimonials={testimonials} />
        </div>
      </section>


      {/* CTA Section */}
      <section className={`${styles.cta} reveal`} data-testid="cta-section">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>{t('Ready to Upgrade Your Kitchen?')}</h2>
            <p>{t('Contact us today for customized solutions')}</p>
            <div className={styles.ctaButtons}>
              <a
                href="tel:+919876543210"
                className={styles.ctaBtn}
                data-testid="cta-call-btn"
              >
                <Phone size={20} />
                <span>{t('Call Now')}</span>
              </a>
              <Link
                to="/contact"
                className={`${styles.ctaBtn} ${styles.secondary}`}
                data-testid="cta-contact-btn"
              >
                {t('Get Quote')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;