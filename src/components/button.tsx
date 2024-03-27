import { ComponentProps, ElementType, forwardRef } from 'react';

import { cn } from '@/utils/cn';

export type ButtonProps = ComponentProps<'button'> & {
  icon?: ElementType<{ className?: string }>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon: Icon, children, ...props }, ref) => (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={ref}
      className={cn(
        'group relative flex items-center overflow-hidden rounded-lg border border-[#222A36] bg-gradient-to-br from-[#132029]/65 via-[#131929]/65 to-[#1B1935]/65 px-4 py-3 font-semibold text-[#F0F0F0] backdrop-blur-md transition-all duration-150 hover:border-[#648AC5] hover:text-white',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#23455E] via-[#283658] to-[#2A246A] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {Icon && (
        <Icon
          className={cn(
            'size-6 text-[#F0F0F0] transition-colors duration-150 group-hover:text-white',
            children && 'mr-3',
          )}
        />
      )}

      {children}
    </button>
  ),
);

Button.displayName = 'Button';
