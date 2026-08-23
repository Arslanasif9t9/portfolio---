// Everything about you that the site displays.
// Edit here — no component needs touching.

export const profile = {
  name: 'Arslan Ahmad',
  wordmark: '<Arslan.Dev />',
  title: 'Senior Web Developer & Team Lead',
  roles: ['Full-Stack Developer', 'Laravel & React', 'Team Lead'],

  hero: {
    // Split so the second line can carry the gold gradient.
    headlineTop: 'I build for',
    headlineBottom: 'the web.',
    blurb:
      'Three years turning business requirements into production systems — Laravel back-ends, React front-ends, and the database design that holds them together.',
  },

  about: {
    headlineTop: "I don't just ship features.",
    headlineBottom: 'I own the whole build.',
    body: [
      'I lead end-to-end development of web applications at Mazain Solution — from stakeholder requirements through architecture, implementation, and deployment.',
      'My foundation is in C++, OOP and data structures, which is why I reach for the right structure before the right framework. I work mostly in Laravel and React, and I mentor junior developers through code review.',
    ],
  },

  // Shown as the status pill on the portrait. Set `available` to false to
  // switch it to a muted "Not taking work" state.
  availability: { available: true, label: 'Available for work' },

  stats: [
    { value: '3+', label: 'Years building' },
    { value: '10+', label: 'Projects delivered' },
    { value: '2024', label: 'Best Programmer Award' },
    { value: 'Lead', label: 'Team of developers' },
  ],

  contact: {
    email: 'arslanahmadt58@gmail.com',
    phone: '+92 345 0776252',
    phoneHref: 'tel:+923450776252',
    location: 'Narowal, Punjab, Pakistan',
    blurb:
      "Open to freelance work, full-time roles, and interesting problems. If you have a project in mind — or just want to talk shop — reach out.",
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/Arslanasif9t9', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arslan-ahmad-983834343/',
      icon: 'linkedin',
    },
    { label: 'WhatsApp', href: 'https://wa.me/923450776252', icon: 'whatsapp' },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/arslan.asif.70412',
      icon: 'facebook',
    },
  ],

  cvPath: 'Arslan_Ahmad_CV.pdf',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
