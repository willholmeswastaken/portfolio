import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/components/project-card';
import { projects } from '@/data';

export function WorkSection() {
  return (
    <section id='work' className='scroll-mt-20 border-t border-white/[0.04] pb-20 pt-8 sm:pb-28 sm:pt-14'>
      <div className='page-container'>
        <SectionHeading
          label='Work'
          title='Side projects'
          description='Mostly Next.js and TypeScript — built to learn and ship.'
        />

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map(project => (
            <ProjectCard
              key={project.slug}
              name={project.name}
              description={project.description}
              url={project.url}
              githubUrl={project.githubUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
