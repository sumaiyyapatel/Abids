import React, { useEffect } from 'react';
import { useScrollReveal, useHeroAnimation } from '@/hooks/useGsapAnimations';
import { useScreenshotProtection } from '@/hooks/useScreenshotProtection';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials3D from '@/components/UI/Testimonials3D';
import BrandMarquee from '@/components/UI/BrandMarquee';
import ProductCard from '@/components/UI/ProductCard';
import styles from './Home.module.css';

const Home = () => {
  useHeroAnimation();
  useScrollReveal('.reveal', { y: 80, stagger: 0.15 });
  useScreenshotProtection();

  const stats = [
    { value: '28+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '15+', label: 'Cities Served' },
    { value: '2+', label: 'Countries' }
  ];

  const features = [
    {
      title: 'Food Carts',
      description: 'Custom-built food carts designed for mobile kitchens with style and durability.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800'
    },
    {
      title: 'Display Counters',
      description: 'Premium display counters to preserve freshness and enhance visual appeal.',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800'
    },
    {
      title: 'Kitchen Equipment',
      description: 'High-performance commercial kitchen solutions for restaurants and hotels.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800'
    }
  ];

  const testimonials = [
    {
      name: 'KUBER SINGH',
      location: 'BHOPAL',
      company: 'KUBER DAIRY',
      text: 'Trustworthy products and even better service! We have purchased multiple units from Abid Refrigeration.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/08/C0051T01.jpg-1.webp'
    },
    {
      name: 'SOURABH TANEJA',
      location: 'BHOPAL',
      company: 'CHEENI KUM',
      text: 'We opened a bakery and gave the full project to Abid Refrigeration. Everything was installed smoothly.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/08/C0069T01.jpg-1.webp'
    },
    {
      name: 'Mohd Abdul Majeed',
      location: 'HYDERABAD',
      company: 'PISTA HOUSE',
      text: 'We trusted Abid Refrigeration with our entire kitchen setup, and they exceeded our expectations.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/08/download-4.jpeg'
    },
    {
      name: 'MR SACHIN',
      location: 'YAVATMAL',
      company: 'PISTA SHOP',
      text: 'We have been using vertical cake display for over 6 months now, and it works flawlessly.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/08/C0107T01.jpg-1.webp'
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
      title: 'Advanced Cooling Technology',
      description: 'Modern refrigeration systems that save power and preserve quality.'
    },
    {
      title: 'Timely Delivery & Installation',
      description: 'Professional installation with no delays, just dependable service.'
    },
    {
      title: '24/7 Support',
      description: 'Reliable support even after delivery for maintenance and breakdowns.'
    },
    {
      title: 'Customized Solutions',
      description: 'Every counter is made to match your business layout and goals.'
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
              <span className={styles.heroSubtext}>Experience the Art of</span>
              <span className={styles.heroMainText}>Precision Cooling With </span>
              <span className={styles.heroAccent}>ABID REFRIGERATION AND ENGINEERING</span>
            </h1>
            <p className="hero-subtitle" data-testid="hero-subtitle">
              Powering Professional Kitchens with Quality Equipment Since 1996
            </p>
            <a
              href="https://wa.link/ah95hi"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
              data-testid="hero-cta-btn"
            >
              <Link to="/contact" className={styles.learnMore} data-testid="hero-contact-btn">
                Contact Us Now<ArrowRight size={18} />
              </Link>
            </a>
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
              <h2>ABID REFRIGERATION & ENGINEERING PRIVATE LIMITED</h2>
              <p>
                Founded in 1996 at Nagpur, Maharashtra, Abid Refrigeration is a renowned
                manufacturer of Display Counters, Commercial Kitchen Products, and Food Carts.
                We use 304 Food Grade raw materials and sophisticated technology to meet global standards.
              </p>
              <p>
                Our products are acknowledged for supreme quality, durability, fine finish,
                reliability, and easy installation. We offer standard and customized solutions
                to meet your precise requirements.
              </p>
              <Link to="/about" className={styles.learnMore} data-testid="learn-more-btn">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={`${styles.products} reveal`} data-testid="products-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What We Build</h2>
            <p>Quality equipment tailored for your business needs</p>
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
            <h2>Why Choose Us?</h2>
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
            <h2>Trusted by Leading Brands</h2>
          </div>
        </div>
        <BrandMarquee brands={brands} />
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} reveal`} data-testid="testimonials-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses across India</p>
          </div>
          <Testimonials3D testimonials={testimonials} />
        </div>
      </section>


      {/* CTA Section */}
      <section className={`${styles.cta} reveal`} data-testid="cta-section">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Upgrade Your Kitchen?</h2>
            <p>Contact us today for customized solutions</p>
            <div className={styles.ctaButtons}>
              <a
                href="tel:+919876543210"
                className={styles.ctaBtn}
                data-testid="cta-call-btn"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <Link
                to="/contact"
                className={`${styles.ctaBtn} ${styles.secondary}`}
                data-testid="cta-contact-btn"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;