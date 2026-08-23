import SectionLabel from '../ui/SectionLabel.jsx';
import Headline from '../ui/Headline.jsx';
import ProjectCard from '../ui/ProjectCard.jsx';
import { projects } from '../../data/projects.js';

export default function Work() {
  return (
    <section id="work" className="py-section px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02">Selected Work</SectionLabel>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <Headline top="Shipped work." bottom="Real systems." />
          <p className="max-w-xs text-sm text-bone-400 leading-relaxed lg:pb-3">
            Scroll to move through the stack — each card opens with the
            architecture behind the build.
          </p>
        </div>

        {/* The stack. Trailing space lets the final card settle before the
            next section arrives. */}
        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
