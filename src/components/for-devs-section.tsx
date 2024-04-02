import { cn } from '@/utils/cn';

export type ForDevsSectionProps = {
  className?: string;
};

export function ForDevsSection({ className }: ForDevsSectionProps) {
  return (
    <div className={cn('text-center font-mono text-sm', className)}>
      <small className="select-none text-[#656b74]">for devs:</small>

      <pre className="text-xs text-[#9ca7b6]">npx luisfeelip</pre>
    </div>
  );
}
