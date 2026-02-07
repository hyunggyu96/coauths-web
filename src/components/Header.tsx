'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function Header() {
  const { language, setLanguage, t } = useTranslation();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'nav.home' },
    { href: '/about', label: 'nav.about' },
    { href: '/services', label: 'nav.services' },
    { href: '/roadmap', label: 'nav.roadmap' },
    { href: '/contact', label: 'nav.contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <header className={`header ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <nav className="nav container">
        <Link href="/" className="logo">
          <span className="logo-text">Co</span>
          <span className="logo-accent">Auths</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {t(link.label)}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button
            onClick={toggleLanguage}
            className="lang-toggle"
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'active' : ''}>EN</span>
            <span className="divider">/</span>
            <span className={language === 'ko' ? 'active' : ''}>KO</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {t(link.label)}
            </Link>
          ))}
        </div>
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(231, 232, 225, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(132, 170, 115, 0.2);
          transition: background-color 0.3s ease;
        }

        .header.mobile-open {
          background: #E7E8E1;
          backdrop-filter: none;
          border-bottom: none;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
        }

        .logo-text {
          color: #222F30;
        }

        .logo-accent {
          color: #84AA73;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #5A6B6C;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #84AA73;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang-toggle {
          background: transparent;
          border: 1px solid rgba(132, 170, 115, 0.3);
          border-radius: 4px;
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
          font-family: 'Noto Sans', sans-serif;
          color: #5A6B6C;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-toggle:hover {
          border-color: #84AA73;
        }

        .lang-toggle span.active {
          color: #84AA73;
        }

        .lang-toggle .divider {
          margin: 0 0.25rem;
          color: #5A6B6C;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: #84AA73;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 70px;
            right: 0;
            left: auto;
            width: auto;
            min-width: 180px;
            max-width: 300px;
            background-color: #E7E8E1;
            z-index: 99;
            padding: 1rem 2rem 1.5rem;
            border-left: 1px solid rgba(132, 170, 115, 0.2);
            border-bottom: 1px solid rgba(132, 170, 115, 0.2);
            border-bottom-left-radius: 12px;
            box-shadow: -10px 10px 30px -10px rgba(34, 47, 48, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          .mobile-nav.open {
            transform: translateX(0);
          }

          .mobile-nav-link {
            padding: 0.75rem 0;
            font-size: 1.1rem;
            color: #222F30;
            border-bottom: 1px solid rgba(132, 170, 115, 0.1);
            opacity: 0;
            text-align: left;
            margin-left: 1rem;
          }

          .mobile-nav-link:last-child {
            border-bottom: none;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link.active {
            color: #84AA73;
          }

          .mobile-nav-link .mono {
            margin-right: 0.75rem;
            font-size: 0.875rem;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .mobile-nav.open .mobile-nav-link {
            animation: slideIn 0.3s ease forwards;
          }
        }
      `}</style>
    </header>
  );
}
