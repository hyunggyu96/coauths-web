'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: '/about', label: 'nav.about' },
    { href: '/services', label: 'nav.services' },
    { href: '/roadmap', label: 'nav.roadmap' },
    { href: '/contact', label: 'nav.contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-text">Co</span>
              <span className="logo-accent">Auths</span>
            </Link>
            <p className="tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>hello@coauths.io</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #112240;
          border-top: 1px solid rgba(100, 255, 218, 0.1);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .logo-text {
          color: #e6f1ff;
        }

        .logo-accent {
          color: #64ffda;
        }

        .tagline {
          color: #8892b0;
          font-size: 0.875rem;
          max-width: 300px;
        }

        .footer-links h4,
        .footer-contact h4 {
          color: #e6f1ff;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: #8892b0;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #64ffda;
        }

        .footer-contact p {
          color: #8892b0;
          font-size: 0.875rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(100, 255, 218, 0.1);
          text-align: center;
        }

        .footer-bottom p {
          color: #8892b0;
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .tagline {
            margin: 0 auto;
          }

          .footer-links nav {
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
