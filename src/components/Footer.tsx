import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  ArrowUpIcon,
} from './Icons';
import { footerSections, socialLinks } from '../constants/footerLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-8">
          <div className="flex items-center">
            <img
              src="/logo-2.png"
              alt="CredPal Logo"
              className="h-7 sm:h-8 md:h-10"
            />
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {socialLinks.map((social) => {
              const IconComponent =
                social.name === 'LinkedIn'
                  ? LinkedInIcon
                  : social.name === 'Instagram'
                  ? InstagramIcon
                  : FacebookIcon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-[#949699] hover:text-white transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#949699] mb-8"></div>

        <div className="mb-8">
          <p className="text-sm md:text-base text-[#949699] w-full max-w-5xl leading-relaxed">
            CredPal is a revolutionary credit solution geared towards providing
            seamless credit access for businesses and individuals across
            developing economies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4">
                {section.title}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#949699] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 gap-4">
            <div className="text-sm text-[#949699]">© CredPal 2024</div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-[#949699] hover:text-white transition-colors"
            >
              <span>Go back to top</span>
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
