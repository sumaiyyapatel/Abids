import React from 'react';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import { Building, Award, Users, Globe } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  useScrollReveal('.reveal', { y: 60, stagger: 0.12 });

  const milestones = [
    {
      year: '1996',
      title: 'Company Established',
      description: 'Abid Refrigeration was established with a vision to provide reliable refrigeration solutions.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/07/19f31772-899f-4c69-8519-44d9e582f6ac.jpg'
    },
    {
      year: '2006',
      title: 'First Showroom in Nagpur',
      description: 'We inaugurated our first showroom in Gandhibagh, Nagpur, marking a significant milestone.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2023-10-16.webp'
    },
    {
      year: '2012',
      title: 'Collaboration with Haldirams',
      description: 'Secured first major project with Haldiram, strengthening our position in commercial refrigeration.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/IMG_3923.jpg'
    },
    {
      year: '2020',
      title: 'Factory Infrastructure',
      description: 'Full infrastructure development featuring modern factory and state-of-the-art showroom.',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/1ca0c26b-9a24-4543-8c4c-1eaf09f7423a.jpg'
    }
  ];

  const values = [
    {
      icon: <Award size={40} />,
      title: 'Quality Excellence',
      description: 'We use 304 Food Grade materials and adhere to international standards in all our products.'
    },
    {
      icon: <Users size={40} />,
      title: 'Customer First',
      description: 'Our clients success is our priority. We provide 24/7 support and customized solutions.'
    },
    {
      icon: <Building size={40} />,
      title: 'Innovation',
      description: 'Continuously upgrading technology to deliver cutting-edge refrigeration solutions.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Sustainability',
      description: 'Energy-efficient designs that reduce environmental impact while maximizing performance.'
    }
  ];

  return (
    <div className={styles.about} data-testid="about-page">
      {/* Hero Section */}
      <section className={styles.hero} data-testid="about-hero">
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="reveal">About Abid Refrigeration</h1>
          <p className="reveal">28 Years of Excellence in Commercial Refrigeration</p>
        </div>
      </section>

      {/* Company Story */}
      <section className={`${styles.story} reveal`} data-testid="company-story">
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2-5-scaled.png" alt="Factory" />
            </div>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                Founded in 1996 at Nagpur, Maharashtra, India, <strong>Abid Refrigeration and Engineering Private Limited</strong> 
                has been a renowned manufacturer of Display Counters, Stalls, and Commercial Kitchen Products.
              </p>
              <p>
                Our products are manufactured using the best grade (304 Food Grade) raw materials and sophisticated 
                technology in accordance with set global standards. We are highly acknowledged for supreme quality, 
                durability, fine finish, reliability, compact design, and easy installation.
              </p>
              <p>
                We offer products in standard as well as customized forms as per the precise requirements of our clients, 
                ensuring they get exactly what their business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline} data-testid="timeline-section">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} reveal`}>
            <h2>Our Journey</h2>
            <p>Key milestones that shaped our success</p>
          </div>
          <div className={styles.timelineWrapper}>
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`${styles.timelineItem} reveal`}
                data-testid={`milestone-${index}`}
              >
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineImage}>
                    <img src={milestone.image} alt={milestone.title} />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`${styles.values} reveal`} data-testid="values-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Core Values</h2>
            <p>Principles that drive our business</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard} data-testid={`value-card-${index}`}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className={`${styles.infrastructure} reveal`} data-testid="infrastructure-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Infrastructure</h2>
          </div>
          <div className={styles.infraContent}>
            <p>
              Our well-developed infrastructural base has contributed to the tremendous growth and success 
              of our organization. We have segregated this unit into various departments:
            </p>
            <div className={styles.infraGrid}>
              <div className={styles.infraItem}>Production & Manufacturing Unit</div>
              <div className={styles.infraItem}>Quality Testing Unit</div>
              <div className={styles.infraItem}>Warehouse & Storage</div>
              <div className={styles.infraItem}>Administrative Department</div>
              <div className={styles.infraItem}>Training Facility</div>
              <div className={styles.infraItem}>R&D Center</div>
            </div>
            <p>
              Our manufacturing unit is well-equipped with modern machinery and latest technology, 
              enabling us to undertake bulk orders and supply them within committed timeframes. 
              Our team works round the clock to accomplish predetermined organizational goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;