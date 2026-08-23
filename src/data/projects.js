// Project cards, in display order.
//
// `github` is intentionally absent on several entries: those repositories
// 404 on the live account, and a dead link costs more than a missing button.
// Add a `github` key once a working URL exists and the button reappears.
//
// `metrics` fills the "// STACK DETAILS" side panel on each card.

export const projects = [
  {
    id: 'multivendor',
    tag: 'Full-Stack / Marketplace',
    title: 'Multi-vendor E-Commerce Platform',
    description:
      'A marketplace with three distinct dashboards — admin, vendor, and customer. Handles complex product relations, vendor payouts, and inventory across multiple storefronts.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'HTML & CSS'],
    live: 'https://arslan.mjcheezain.com/',
    metrics: [
      ['Dashboards', 'Admin · Vendor · Customer'],
      ['Core', 'Laravel + Blade'],
      ['Data', 'MySQL, relational catalog'],
    ],
  },
  {
    id: 'alkuwait',
    tag: 'Full-Stack / Retail',
    title: 'Al-Kuwait E-Commerce',
    description:
      'An online retail system with a full admin panel for order processing and catalog management, built on a multi-page architecture tuned for high-traffic shopping flows.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'HTML & CSS'],
    live: 'https://alkuwait.mjcheezain.com/',
    metrics: [
      ['Scope', 'Storefront + admin'],
      ['Backend', 'Laravel'],
      ['Focus', 'Order processing'],
    ],
  },
  {
    id: 'blogsphere',
    tag: 'Web App / CMS',
    title: 'BlogSphere',
    description:
      'A content management and blogging platform with an admin dashboard for moderation, user management, and post-engagement analytics.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'HTML & CSS'],
    live: 'https://blogsphere.mjcheezain.com/',
    metrics: [
      ['Type', 'CMS + publishing'],
      ['Admin', 'Moderation & analytics'],
      ['Backend', 'Laravel'],
    ],
  },
  {
    id: 'iot-parking',
    tag: 'Hardware / IoT',
    title: 'IoT Automatic Car Parking',
    description:
      'A hardware-software hybrid using embedded systems. Automatic slot detection and entry control in C++ and PHP, with a web interface for real-time parking availability.',
    tech: ['Embedded C++', 'PHP', 'IoT', 'JavaScript', 'MySQL'],
    metrics: [
      ['Firmware', 'Embedded C++'],
      ['Bridge', 'PHP + MySQL'],
      ['Interface', 'Live slot monitoring'],
    ],
  },
  {
    id: 'textutils',
    tag: 'React / Utility',
    title: 'React TextUtils',
    description:
      'A text-manipulation utility built in React — case conversion, whitespace cleanup, reading-time estimates, and text-to-speech, all updating in real time.',
    tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    live: 'https://arslanasif9t9.github.io/react-text/',
    github: 'https://github.com/arslanasif9t9/react-text',
    metrics: [
      ['State', 'React hooks'],
      ['Features', 'Case · trim · TTS'],
      ['Deploy', 'GitHub Pages'],
    ],
  },
  {
    id: 'icoder',
    tag: 'Frontend / Template',
    title: 'iCoder Bootstrap Portal',
    description:
      'A responsive coding blog and educational template built on Bootstrap, focused on clean typography, reusable components, and mobile-first layout.',
    tech: ['Bootstrap 5', 'HTML5', 'CSS3', 'JavaScript'],
    live: 'https://arslanasif9t9.github.io/iCoder_Bootstrap/',
    github: 'https://github.com/Arslanasif9t9/iCoder_Bootstrap',
    metrics: [
      ['Framework', 'Bootstrap 5'],
      ['Approach', 'Mobile-first'],
      ['Deploy', 'GitHub Pages'],
    ],
  },
];
