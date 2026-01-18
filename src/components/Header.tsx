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
        <header className="header">
            <nav className="nav container">
                <Link href="/" className="logo">
                    <span className="logo-text">AI</span>
                    <span className="logo-accent">Sapiens</span>
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
                            <span className="mono accent">0{index + 1}.</span>
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
          background: rgba(10, 25, 47, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(100, 255, 218, 0.1);
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
          color: #e6f1ff;
        }

        .logo-accent {
          color: #64ffda;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #ccd6f6;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #64ffda;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang-toggle {
          background: transparent;
          border: 1px solid rgba(100, 255, 218, 0.3);
          border-radius: 4px;
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          color: #8892b0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-toggle:hover {
          border-color: #64ffda;
        }

        .lang-toggle span.active {
          color: #64ffda;
        }

        .lang-toggle .divider {
          margin: 0 0.25rem;
          color: #8892b0;
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
          background: #64ffda;
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
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(10, 25, 47, 0.98);
            padding: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }

          .mobile-nav.open {
            transform: translateX(0);
          }

          .mobile-nav-link {
            padding: 1rem 0;
            font-size: 1.25rem;
            color: #ccd6f6;
            border-bottom: 1px solid rgba(100, 255, 218, 0.1);
            opacity: 0;
            animation: slideIn 0.3s ease forwards;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link.active {
            color: #64ffda;
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
