import { cn } from '@/lib/utils';

type CalloutProps = {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'accent';
};

export function Callout({ title, children, variant = 'default' }: CalloutProps) {
  return (
    <aside
      className={cn(
        'my-6 rounded-xl border px-4 py-3.5 sm:px-5 sm:py-4',
        variant === 'accent'
          ? 'border-[hsl(var(--accent)/0.35)] bg-[hsl(var(--accent)/0.08)]'
          : 'border-white/[0.08] bg-white/[0.03]',
      )}
    >
      {title && (
        <p className='mb-1.5 text-sm font-medium text-white'>{title}</p>
      )}
      <div className='text-[15px] leading-relaxed text-muted-foreground [&>p]:m-0'>
        {children}
      </div>
    </aside>
  );
}
