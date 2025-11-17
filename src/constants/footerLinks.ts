export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
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

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
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

