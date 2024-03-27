'use client';

import Link from 'next/link';
import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  MouseEvent,
  useRef,
} from 'react';
import { toast } from 'sonner';

import { cn } from '@/utils/cn';

export type SocialButtonProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  to: string;
  textToCopy: string;
  isMailTo?: boolean;
};

export function SocialButton({
  className,
  to,
  textToCopy,
  isMailTo = false,
  children,
  ...props
}: SocialButtonProps) {
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);

  function copyToClipboard() {
    navigator.clipboard.writeText(textToCopy);

    toast.success('Copied to clipboard.');
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (event.shiftKey) {
      copyToClipboard();
    }

    if (!event.shiftKey) {
      window.open(to, '_blank');
    }
  }

  function handleTouchStart() {
    longPressTimerRef.current = setTimeout(() => {
      copyToClipboard();
    }, 800);
  }

  function handleTouchEnd() {
    const longPressTimer = longPressTimerRef.current;

    if (longPressTimer) {
      clearTimeout(longPressTimer);

      longPressTimerRef.current = null;
    }
  }

  if (
    !children ||
    Children.count(children) !== 1 ||
    !isValidElement(children)
  ) {
    throw new Error(
      '[SocialButton] The `children` must be a single React node',
    );
  }

  const childrenModified = cloneElement(children, {
    // @ts-expect-error
    className:
      'size-5 text-[#9AA5B6] transition-colors duration-150 group-hover:text-[#EDF4FF]',
  });

  return (
    <Link
      href={isMailTo ? `mailto:${to}` : to}
      target={isMailTo ? undefined : '_blank'}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onMouseDown={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseUp={handleTouchEnd}
      className={cn(
        'group relative flex aspect-square items-center overflow-hidden rounded-full border border-[#303a49] bg-gradient-to-br from-[#0F1114]/35 to-[#1E2530] p-3 font-semibold backdrop-blur-md transition-all duration-150 hover:border-[#ADC3E4]',
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#40464F]/50 to-[#303C4E] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {childrenModified}
    </Link>
  );
}
