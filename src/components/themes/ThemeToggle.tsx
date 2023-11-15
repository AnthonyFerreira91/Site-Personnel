'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className='w-6 h-6 fixed right-5 top-4'
    >
      <RiSunLine size="24px" className="transition-all hover:text-blue-600 dark:hidden" />
      <RiMoonLine size="24px" className="transition-all hover:text-blue-400 hidden dark:block" />
    </button>
  )
}
