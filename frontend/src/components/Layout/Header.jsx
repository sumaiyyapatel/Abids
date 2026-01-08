import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/UI/LanguageSelector';
import styles from './Header.module.css';
import { ModeToggle } from '@/components/UI/ModeToggle';

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
    { path: '/', label: t('Home') },
    { path: '/about', label: t('About') },
    { path: '/products', label: t('Products') },
    { path: '/projects', label: t('Projects') },
    { path: '/contact', label: t('Contact') }
  ];



  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} data-testid="main-header">
      <div className={styles.container}>
        <Link to="/" className={styles.logo} data-testid="logo-link">
          <img src="/assets/logo.png" alt={t('Company Logo')} className={styles.logoImage} />
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
          <div className="flex items-center gap-2 ml-4">
            <ModeToggle />
            <LanguageSelector />
          </div>
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