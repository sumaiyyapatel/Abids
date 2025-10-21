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

      {/* Team Section */}
      <section className={`${styles.team} reveal`} data-testid="team-section">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Team</h2>
            <p>Dedicated professionals driving our success</p>
          </div>
          <div className={styles.teamGrid}>
            {[
              {
                name: 'Mohammed Abid',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
                bio: 'Visionary leader with 28+ years in refrigeration industry',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'abid@abidnagpur.com'
                }
              },
              {
                name: 'Arif Khan',
                role: 'Chief Operations Officer',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
                bio: 'Expert in production management and quality control',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'arif@abidnagpur.com'
                }
              },
              {
                name: 'Fatima Sheikh',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
                bio: 'Creative designer specializing in commercial equipment',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'fatima@abidnagpur.com'
                }
              },
              {
                name: 'Rahul Deshmukh',
                role: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
                bio: 'Engineering expert with focus on innovation',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'rahul@abidnagpur.com'
                }
              },
              {
                name: 'Priya Sharma',
                role: 'Customer Relations Manager',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
                bio: 'Dedicated to ensuring customer satisfaction',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'priya@abidnagpur.com'
                }
              },
              {
                name: 'Amit Patel',
                role: 'Quality Assurance Head',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
                bio: 'Ensuring excellence in every product we deliver',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  email: 'amit@abidnagpur.com'
                }
              }
            ].map((member, index) => (
              <div key={index} className={styles.teamCard} data-testid={`team-member-${index}`}>
                <div className={styles.teamCardInner}>
                  <div className={styles.teamCardFront}>
                    <div className={styles.teamImage}>
                      <img src={member.image} alt={member.name} />
                      <div className={styles.teamOverlay}></div>
                    </div>
                    <div className={styles.teamInfo}>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                  <div className={styles.teamCardBack}>
                    <div className={styles.teamBackContent}>
                      <h3>{member.name}</h3>
                      <p className={styles.teamRole}>{member.role}</p>
                      <p className={styles.teamBio}>{member.bio}</p>
                      <div className={styles.teamSocial}>
                        <a href={member.social.linkedin} aria-label="LinkedIn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a href={member.social.twitter} aria-label="Twitter">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                        <a href={`mailto:${member.social.email}`} aria-label="Email">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
            <p>State-of-the-art facilities driving excellence</p>
          </div>

          <div className={styles.infraHero}>
            <div className={styles.infraImageGrid}>
              <div className={styles.infraImageLarge}>
                <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2-5-scaled.png" alt="Main Factory" />
                <div className={styles.infraImageLabel}>Manufacturing Excellence</div>
              </div>
              <div className={styles.infraImageSmall}>
                <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/1ca0c26b-9a24-4543-8c4c-1eaf09f7423a.jpg" alt="Production Floor" />
                <div className={styles.infraImageLabel}>Modern Equipment</div>
              </div>
              <div className={styles.infraImageSmall}>
                <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2023-10-16.webp" alt="Showroom" />
                <div className={styles.infraImageLabel}>Premium Showroom</div>
              </div>
            </div>
          </div>

          <div className={styles.infraContent}>
            <p className={styles.infraIntro}>
              Our well-developed infrastructural base has contributed to the tremendous growth and success
              of our organization. We have segregated this unit into various departments, each equipped
              with modern technology and expert personnel.
            </p>

            <div className={styles.infraGrid}>
              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3>Production & Manufacturing</h3>
                <p>Advanced machinery for precision manufacturing with capacity for bulk orders</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3>Quality Testing Unit</h3>
                <p>Rigorous testing protocols ensuring every product meets global standards</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>Warehouse & Storage</h3>
                <p>Temperature-controlled storage with efficient inventory management systems</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Administrative Department</h3>
                <p>Streamlined operations with dedicated teams for sales, support, and logistics</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>Training Facility</h3>
                <p>Continuous skill development programs for technical and service excellence</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>R&D Center</h3>
                <p>Innovation hub for developing cutting-edge refrigeration solutions</p>
              </div>
            </div>

            <div className={styles.infraStats}>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>50,000+</div>
                <div className={styles.infraStatLabel}>Sq. Ft. Facility</div>
              </div>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>100+</div>
                <div className={styles.infraStatLabel}>Skilled Workers</div>
              </div>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>24/7</div>
                <div className={styles.infraStatLabel}>Operations</div>
              </div>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>ISO</div>
                <div className={styles.infraStatLabel}>Certified</div>
              </div>
            </div>

            <p className={styles.infraClosing}>
              Our manufacturing unit is equipped with the latest technology and modern machinery,
              enabling us to undertake bulk orders and deliver them within committed timeframes.
              Our dedicated team works round the clock to accomplish organizational goals and
              maintain our reputation for quality and reliability.
            </p>
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
            <p>State-of-the-art facilities driving excellence</p>
          </div>

          <div className={styles.infraHero}>
            <div className={styles.infraImageGrid}>
              <div className={styles.infraImageLarge}>
                <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2-5-scaled.png" alt="Main Factory" />
                <div className={styles.infraImageLabel}>Manufacturing Excellence</div>
              </div>
              <div className={styles.infraImageSmall}>
                <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/1ca0c26b-9a24-4543-8c4c-1eaf09f7423a.jpg" alt="Production Floor" />
                <div className={styles.infraImageLabel}>Modern Equipment</div>
              </div>
              <div className={styles.infraImageSmall}>
                <img src="https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2023-10-16.webp" alt="Showroom" />
                <div className={styles.infraImageLabel}>Premium Showroom</div>
              </div>
            </div>
          </div>

          <div className={styles.infraContent}>
            <p className={styles.infraIntro}>
              Our well-developed infrastructural base has contributed to the tremendous growth and success
              of our organization. We have segregated this unit into various departments, each equipped
              with modern technology and expert personnel.
            </p>
            <div className={styles.infraStats}>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>50,000+</div>
                <div className={styles.infraStatLabel}>Sq. Ft. Facility</div>
              </div>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>100+</div>
                <div className={styles.infraStatLabel}>Skilled Workers</div>
              </div>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>24/7</div>
                <div className={styles.infraStatLabel}>Operations</div>
              </div>
              <div className={styles.infraStat}>
                <div className={styles.infraStatValue}>ISO</div>
                <div className={styles.infraStatLabel}>Certified</div>
              </div>
            </div>


            <p className={styles.infraClosing}>
              Our manufacturing unit is equipped with the latest technology and modern machinery,
              enabling us to undertake bulk orders and deliver them within committed timeframes.
              Our dedicated team works round the clock to accomplish organizational goals and
              maintain our reputation for quality and reliability.
            </p>

            <div className={styles.infraGrid}>
              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3>Production & Manufacturing</h3>
                <p>Advanced machinery for precision manufacturing with capacity for bulk orders</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3>Quality Testing Unit</h3>
                <p>Rigorous testing protocols ensuring every product meets global standards</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>Warehouse & Storage</h3>
                <p>Temperature-controlled storage with efficient inventory management systems</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Administrative Department</h3>
                <p>Streamlined operations with dedicated teams for sales, support, and logistics</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>Training Facility</h3>
                <p>Continuous skill development programs for technical and service excellence</p>
              </div>

              <div className={styles.infraCard}>
                <div className={styles.infraIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>R&D Center</h3>
                <p>Innovation hub for developing cutting-edge refrigeration solutions</p>
              </div>
            </div>




          </div>
        </div>
      </section>
    </div>
  );
};

export default About;