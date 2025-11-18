// Footer component - displays footer links, social media, and company info
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  ArrowUpIcon,
} from './IconComponents';
import './Footer.css';

// Define footer link types
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

const Footer = () => {
  // Footer sections with links - moved from constants
  const footerSections: FooterSection[] = [
    {
      title: 'Products',
      links: [
        { label: 'Shop', href: '#' },
        { label: 'Cards', href: '#' },
        { label: 'Credit Builder', href: '#' },
        { label: 'Investment', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Customer Terms of use', href: '#' },
        { label: 'Merchant Terms of service', href: '#' },
        { label: 'Privacy Notice', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Contact us',
      links: [
        { label: 'hello@credpal.com', href: 'mailto:hello@credpal.com' },
        { label: '+234 708 740 9746', href: 'tel:+2347087409746' },
      ],
    },
  ];

  // Social media links - moved from constants
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      href: '#',
      ariaLabel: 'LinkedIn',
    },
    {
      name: 'Instagram',
      href: '#',
      ariaLabel: 'Instagram',
    },
    {
      name: 'Facebook',
      href: '#',
      ariaLabel: 'Facebook',
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get the correct social icon component based on name
  const getSocialIcon = (socialName: string) => {
    switch (socialName) {
      case 'LinkedIn':
        return LinkedInIcon;
      case 'Instagram':
        return InstagramIcon;
      case 'Facebook':
        return FacebookIcon;
      default:
        return LinkedInIcon;
    }
  };

  // Dark background color
  const darkBackground = '#191919';

  return (
    <footer
      className="footer"
      style={{ backgroundColor: darkBackground }}
    >
      <div className="footer-container">
        {/* Logo and social links */}
        <div className="footer-header">
          <div className="footer-logo-wrapper">
            <img
              src="/logo-2.png"
              alt="CredPal Logo"
              className="footer-logo"
            />
          </div>

          <div className="footer-social-links">
            {socialLinks.map((social) => {
              const IconComponent = getSocialIcon(social.name);

              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.ariaLabel}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider line */}
        <div className="footer-divider"></div>

        {/* Company description */}
        <div className="footer-description-wrapper">
          <p className="footer-description">
            CredPal is a revolutionary credit solution geared towards providing
            seamless credit access for businesses and individuals across
            developing economies.
          </p>
        </div>

        {/* Footer links grid */}
        <div className="footer-links-grid">
          {footerSections.map((section) => (
            <div key={section.title} className="footer-section">
              <h4 className="footer-section-title">
                {section.title}
              </h4>
              <ul className="footer-section-links">
                {section.links.map((link) => (
                  <li key={link.label} className="footer-link-item">
                    <a
                      href={link.href}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom - copyright and back to top */}
        <div className="footer-bottom">
          <div className="footer-copyright">© CredPal 2024</div>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
          >
            <span>Go back to top</span>
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
