'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function Header() {
  const { language, setLanguage, t } = useTranslation();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'nav.about' },
    { href: '/services', label: 'nav.services' },
    { href: '/roadmap', label: 'nav.roadmap' },
    { href: '/contact', label: 'nav.contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <nav className="nav container">
        <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-text">Co</span>
          <span className="logo-accent">auths</span>
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
              style={{ animationDelay: `${index * 0.07}s` }}
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
          height: 64px;
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .header.scrolled {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.92);
        }

        .header.mobile-open {
          background: #FFFFFF;
          backdrop-filter: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        /* ── Logo ── */
        .logo {
          font-size: 1.4rem;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: -0.03em;
          line-height: 1;
          flex-shrink: 0;
        }

        .logo-text  { color: #1d1d1f; }
        .logo-accent { color: #84AA73; }

        /* ── Nav links ── */
        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #424245;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.375rem 0.25rem;
          border-radius: 980px;
          transition: color 0.2s ease;
          letter-spacing: -0.01em;
        }

        .nav-link:hover {
          color: #1d1d1f;
          background: rgba(0,0,0,0.05);
        }

        .nav-link.active {
          color: #1d1d1f;
          font-weight: 600;
        }

        /* ── Actions ── */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .lang-toggle {
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 980px;
          padding: 0.375rem 0.75rem;
          font-size: 0.75rem;
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          color: #6e6e73;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }

        .lang-toggle:hover {
          border-color: rgba(0,0,0,0.3);
          color: #1d1d1f;
        }

        .lang-toggle span.active {
          color: #1d1d1f;
          font-weight: 700;
        }

        .lang-toggle .divider {
          margin: 0 0.2rem;
          opacity: 0.4;
        }



        /* ── Hamburger ── */
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 22px;
        }

        .hamburger span {
          display: block;
          height: 1.5px;
          background: #1d1d1f;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 1px;
        }

        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        /* ── Mobile Nav ── */
        .mobile-nav {
          display: none;
        }

        @media (max-width: 880px) {
          .nav-links { display: none; }

          .mobile-menu-btn { display: block; }

          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 64px;
            right: 0;
            width: min(300px, 85vw);
            background: #FFFFFF;
            z-index: 99;
            padding: 1.25rem 1.5rem 2rem;
            border-left: 1px solid rgba(0,0,0,0.07);
            border-bottom: 1px solid rgba(0,0,0,0.07);
            border-bottom-left-radius: 20px;
            box-shadow: -12px 12px 40px rgba(0,0,0,0.10);
            transform: translateX(100%);
            transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .mobile-nav.open {
            transform: translateX(0);
          }

          .mobile-nav-link {
            padding: 0.875rem 0.5rem;
            font-size: 1rem;
            font-weight: 500;
            color: #424245;
            border-bottom: 1px solid rgba(0,0,0,0.06);
            opacity: 0;
            text-align: left;
            letter-spacing: -0.01em;
          }

          .mobile-nav-link:last-of-type { border-bottom: none; }

          .mobile-nav-link:hover,
          .mobile-nav-link.active { color: #1d1d1f; }



          @keyframes slideIn {
            from { opacity: 0; transform: translateX(16px); }
            to   { opacity: 1; transform: translateX(0); }
          }

          .mobile-nav.open .mobile-nav-link,
          .mobile-nav.open .mobile-nav-cta {
            animation: slideIn 0.3s ease forwards;
          }
        }
      `}</style>
    </header>
  );
}
