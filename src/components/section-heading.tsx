import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 flex flex-col gap-3 sm:mb-12', className)}>
      {label && <span className='section-label'>{label}</span>}
      <h2 className='font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl'>
        {title}
      </h2>
      {description && (
        <p className='max-w-lg text-[15px] leading-relaxed text-muted-foreground text-pretty'>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
