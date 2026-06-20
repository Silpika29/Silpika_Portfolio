import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Adding a small delay to trigger the entrance animation
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${
        mounted ? 'opacity-100' : 'opacity-0'
      } ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div
        className={`flex justify-between items-center w-full px-container-padding max-w-7xl mx-auto transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
      >
        <a
          href='#hero'
          className='font-emphasis text-[40px] font-medium text-forest tracking-tight interactive flex items-center'
        >
          <span className='italic'>S</span>
          <span className='not-italic'>J.</span>
        </a>

        <div className='flex gap-8 items-center'>
          <a
            className='text-forest font-semibold font-label-caps text-[11px] tracking-[0.2em] uppercase hover:text-terracotta transition-colors duration-500 ease-out interactive'
            href='https://linkedin.com'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <a
            className='text-forest font-semibold font-label-caps text-[11px] tracking-[0.2em] uppercase hover:text-terracotta transition-colors duration-500 ease-out interactive'
            href='https://leetcode.com'
            target='_blank'
            rel='noreferrer'
          >
            LeetCode
          </a>
        </div>
      </div>
    </nav>
  );
};
