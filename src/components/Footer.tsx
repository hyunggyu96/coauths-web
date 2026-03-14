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
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <span className="logo-text">Co</span>
              <span className="logo-accent">auths</span>
            </Link>
            <p className="tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navigation</h4>
              <nav>
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {t(link.label)}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <p>jonathan@coauths.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-bottom-links">
            <span>AI-Driven Neutrality</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #FFFFFF;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand {
          flex: 0 0 auto;
          max-width: 280px;
        }

        .logo {
          font-size: 1.4rem;
          font-weight: 800;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .logo-text  { color: #1d1d1f; }
        .logo-accent { color: #84AA73; }

        .tagline {
          color: #999999;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .footer-cols {
          display: flex;
          gap: 4rem;
        }

        .footer-col h4 {
          color: #1d1d1f;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        .footer-col nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-col nav a {
          color: #6e6e73;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-col nav a:hover { color: #84AA73; }

        .footer-col > p {
          color: #6e6e73;
          font-size: 0.875rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-bottom p {
          color: #999999;
          font-size: 0.8125rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .footer-bottom-links span {
          font-size: 0.8125rem;
          color: #84AA73;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 2rem;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-cols {
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
