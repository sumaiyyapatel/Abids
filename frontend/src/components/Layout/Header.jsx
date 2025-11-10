import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} data-testid="main-header">
      <div className={styles.container}>
        <Link to="/" className={styles.logo} data-testid="logo-link">
          <img src="/assets/logo.png" alt="Company Logo" className={styles.logoImage} />
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`} data-testid="main-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className={styles.langBtn}
            data-testid="language-toggle-btn"
          >
            {i18n.language === 'en' ? 'हिं' : 'EN'}
          </button>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;