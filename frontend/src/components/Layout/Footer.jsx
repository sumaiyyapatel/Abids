import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} data-testid="main-footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{t('ABID Refrigeration')}</h3>
            <p className={styles.description}>
              {t('Leading manufacturer of commercial refrigeration equipment since 1996.')}
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
            <h4 className={styles.columnTitle}>{t('Quick Links')}</h4>
            <nav className={styles.footerNav}>
              <Link to="/about" data-testid="footer-link-about">{t('About Us')}</Link>
              <Link to="/products" data-testid="footer-link-products">{t('Products')}</Link>
              <Link to="/projects" data-testid="footer-link-projects">{t('Projects')}</Link>
              <Link to="/contact" data-testid="footer-link-contact">{t('Contact')}</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t('Products')}</h4>
            <nav className={styles.footerNav}>
              <a href="#" data-testid="footer-product-display">{t('Display Counters')}</a>
              <a href="#" data-testid="footer-product-kitchen">{t('Kitchen Equipment')}</a>
              <a href="#" data-testid="footer-product-carts">{t('Food Carts')}</a>
              <a href="#" data-testid="footer-product-chillers">{t('Commercial Chillers')}</a>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t('Contact Info')}</h4>
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
                <span>{t('Gandhibagh, Nagpur, Maharashtra')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('© 2025 Abid Refrigeration Engineering Pvt Ltd. All rights reserved.')}</p>
          <div className={styles.bottomLinks}>
            <a href="#" data-testid="footer-privacy">{t('Privacy Policy')}</a>
            <a href="#" data-testid="footer-terms">{t('Terms of Service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;