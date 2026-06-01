import { type FC } from 'react';
import '../../styles/components/layout/Footer.css';


// const XIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//   </svg>
// );

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="2 2 20 20" fill="currentColor">
    {/* viewBox="2 2 20 20" remove o padding e foca na área útil */}
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
  </svg>
);


// const LinkedInIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//   </svg>
// );

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const SOCIAL_LINKS = [
    // {
    //   name: 'X',
    //   icon: <XIcon />,
    //   url: 'https://x.com/Kirikae Labsbot',
    //   label: 'Follow us on X'
    // },
    // {
    //   name: 'LinkedIn',
    //   icon: <LinkedInIcon />,
    //   url: 'https://www.linkedin.com/company/Kirikae Labs',
    //   label: 'Connect with us on LinkedIn'
    // },
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/KirikaeLabs',
      label: 'View our GitHub'
    }
  ];

 return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand-section">
            <div className="footer__brand">
              <img
                src="/images/brand/KirikaeLogo.png"
                alt="Kirikae Labs Logo"
                className="footer__logo"
              />
              <span className="footer__brand-name">Kirikae Labs</span>
            </div>
            {/* Copyright for Desktop (below brand) */}
            <p className="footer__copyright">
              © {currentYear} Kirikae Labs. If It Doesn't Exist, Build It.
            </p>
          </div>

          {/* Social Section */}
          <nav className="footer__social-section">
            <div className="footer__social">
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="footer__social-tooltip">{link.name}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Copyright Section */}
          <div className="footer__copyright-section">
            <p className="footer__copyright">
              © {currentYear} Kirikae Labs. Build the Markets They Fear.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
