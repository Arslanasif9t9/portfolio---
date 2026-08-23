// Four quadrants for the Tech Matrix section.
// Regrouped from the old site's flat Frontend/Backend/Tools lists so each
// block says what you *do* with the stack, not just that you've touched it.

export const skillGroups = [
  {
    kicker: 'Interface',
    title: 'Frontend Architecture',
    description:
      'Building responsive, component-driven interfaces that hold up on real devices and slow connections.',
    tech: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    kicker: 'Systems',
    title: 'Backend & APIs',
    description:
      'Server-side applications and REST APIs, with the auth, validation, and business logic behind them.',
    tech: ['PHP', 'Laravel', 'Node.js', 'Express'],
  },
  {
    kicker: 'Persistence',
    title: 'Data Platforms',
    description:
      'Relational schema design with sane indexing and transaction boundaries — plus document stores where they fit.',
    tech: ['MySQL', 'MongoDB', 'SQL Workbench'],
  },
  {
    kicker: 'Foundation',
    title: 'Core Computer Science',
    description:
      'The layer under the frameworks: data structures, algorithmic problem solving, and object-oriented design.',
    tech: ['C++', 'C', 'OOP', 'Data Structures', 'Algorithms'],
  },
];

export const tooling = ['Git', 'GitHub', 'VS Code', 'XAMPP', 'AWS'];
