import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Cyber Security',
          href: getPermalink('/cyber-security'),
        },
        {
          text: 'Strategic Planning',
          href: getPermalink('/strategic-planning'),
        },
        {
          text: 'Managed Services',
          href: getPermalink('/managed-services'),
        },
        {
          text: 'IT Support',
          href: getPermalink('/it-support'),
        },
        {
          text: 'Data Protection',
          href: getPermalink('/data-protection'),
        },
        {
          text: 'Co-Managed IT',
          href: getPermalink('/comanaged-it'),
        }
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Client Portal',
      href: 'https://itflow.vgeek.guru/portal/login.php'
    }
  ],
};

export const footerData = {
};
