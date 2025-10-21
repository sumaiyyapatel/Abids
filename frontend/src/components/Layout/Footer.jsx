import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="main-footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>ABID Refrigeration</h3>
            <p className={styles.description}>
              Leading manufacturer of commercial refrigeration equipment since 1996.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} data-testid="social-facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink} data-testid="social-instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} data-testid="social-linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <nav className={styles.footerNav}>
              <Link to="/about" data-testid="footer-link-about">About Us</Link>
              <Link to="/products" data-testid="footer-link-products">Products</Link>
              <Link to="/projects" data-testid="footer-link-projects">Projects</Link>
              <Link to="/contact" data-testid="footer-link-contact">Contact</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Products</h4>
            <nav className={styles.footerNav}>
              <a href="#" data-testid="footer-product-display">Display Counters</a>
              <a href="#" data-testid="footer-product-kitchen">Kitchen Equipment</a>
              <a href="#" data-testid="footer-product-carts">Food Carts</a>
              <a href="#" data-testid="footer-product-chillers">Commercial Chillers</a>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <a href="tel:+919876543210" className={styles.contactItem} data-testid="footer-phone">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@abidnagpur.com" className={styles.contactItem} data-testid="footer-email">
                <Mail size={18} />
                <span>info@abidnagpur.com</span>
              </a>
              <div className={styles.contactItem} data-testid="footer-address">
                <MapPin size={18} />
                <span>Gandhibagh, Nagpur, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Abid Refrigeration Engineering Pvt Ltd. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" data-testid="footer-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;