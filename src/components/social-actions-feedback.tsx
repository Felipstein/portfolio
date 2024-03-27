'use client';

import { useEffect, useState } from 'react';

export function SocialActionsFeedback() {
  const [isShiftPressed, setIsShiftPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Shift') {
        setIsShiftPressed(true);
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === 'Shift') {
        setIsShiftPressed(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <span className="mt-2.5 select-none font-mono text-xs text-[#656b74]">
      {isShiftPressed ? (
        <>Click to copy</>
      ) : (
        <>
          Hold{' '}
          <strong className="hidden font-semibold text-[#9ca7b6] sm:inline">
            SHIFT
          </strong>{' '}
          to copy instead of browse
        </>
      )}
    </span>
  );
}
