import { motion } from 'framer-motion';
import { useState } from 'react';

export const About = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation between -15 and 15 degrees
    const rY = (x / rect.width - 0.5) * 30;
    const rX = -(y / rect.height - 0.5) * 30;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className='py-32 max-w-[1280px] mx-auto px-container-padding mt-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center'>
        {/* Left Column */}
        <motion.div
          className='flex flex-col justify-center'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className='font-label-caps text-xs uppercase tracking-[0.15em] text-primary-container mb-4 font-semibold'>
            About Me
          </div>
          <h1 className='font-emphasis text-[40px] md:text-[52px] leading-tight font-bold text-on-surface mb-6'>
            Passionate about building{' '}
            <span className='italic text-tertiary font-normal'>intelligent</span> solutions
          </h1>
          <p className='font-body-md text-[17px] leading-[1.8] text-on-surface/80 mb-12 max-w-[540px]'>
            Hardworking and enthusiastic undergraduate student specializing in Artificial
            Intelligence and Machine Learning, with a strong interest in building practical AI-based
            solutions. Eager to apply technical knowledge, strengthen problem-solving skills, and
            gain real-world experience while contributing meaningfully to organizational growth.
          </p>

          {/* Stats Rows */}
          <div className='flex flex-col border-t border-outline-variant'>
            <div className='flex items-center justify-between py-5 border-b border-outline-variant group hover:bg-surface-container/20 transition-colors duration-500 px-2'>
              <span className='font-emphasis text-[32px] font-bold text-on-surface'>8.8</span>
              <span className='font-label-caps text-[12px] text-primary-container uppercase tracking-wider'>
                CGPA
              </span>
            </div>
            <div className='flex items-center justify-between py-5 border-b border-outline-variant group hover:bg-surface-container/20 transition-colors duration-500 px-2'>
              <span className='font-emphasis text-[32px] font-bold text-on-surface'>2</span>
              <span className='font-label-caps text-[12px] text-primary-container uppercase tracking-wider'>
                Internships Completed
              </span>
            </div>
            <div className='flex items-center justify-between py-5 border-b border-outline-variant group hover:bg-surface-container/20 transition-colors duration-500 px-2'>
              <span className='font-emphasis text-[32px] font-bold text-on-surface'>4+</span>
              <span className='font-label-caps text-[12px] text-primary-container uppercase tracking-wider'>
                Certifications Earned
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Large Abstract Card */}
          <motion.div
            className='bg-surface-container rounded-[24px] p-12 flex items-center justify-center mb-6 shadow-[0_20px_40px_-15px_rgba(45,58,49,0.05)] cursor-crosshair relative overflow-hidden'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX,
              rotateY,
              scale: rotateX !== 0 || rotateY !== 0 ? 1.02 : 1
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
          >
            {/* Dynamic Glass Highlight */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none opacity-0'
              animate={{
                opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
                x: rotateY * 8,
                y: -rotateX * 8
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />

            <motion.svg
              className='opacity-90 z-10'
              fill='none'
              height='320'
              viewBox='0 0 280 320'
              width='280'
              xmlns='http://www.w3.org/2000/svg'
              style={{ transform: 'translateZ(50px)' }}
            >
              {/* Stems */}
              <motion.g
                animate={{
                  x: rotateY * -0.3,
                  y: rotateX * 0.3
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <path
                  d='M140 320C140 320 120 180 60 100'
                  stroke='#2D3A31'
                  strokeLinecap='round'
                  strokeOpacity='0.3'
                  strokeWidth='2'
                ></path>
                <path
                  d='M140 320C140 320 160 200 220 140'
                  stroke='#2D3A31'
                  strokeLinecap='round'
                  strokeOpacity='0.3'
                  strokeWidth='2'
                ></path>
                <path
                  d='M140 240C140 240 100 160 40 180'
                  stroke='#2D3A31'
                  strokeLinecap='round'
                  strokeOpacity='0.3'
                  strokeWidth='2'
                ></path>
              </motion.g>

              {/* Circle (Sun/Moon) */}
              <motion.circle
                cx='140'
                cy='80'
                fill='#C27B66'
                opacity='0.15'
                r='40'
                animate={{
                  x: rotateY * -1.5,
                  y: rotateX * 1.5,
                  scale: rotateX !== 0 || rotateY !== 0 ? 1.1 : 1
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />

              {/* Leaves */}
              <motion.g
                animate={{
                  x: rotateY * -0.8,
                  y: rotateX * 0.8
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              >
                <path
                  d='M60 100C40 60 80 20 120 40C120 40 100 80 60 100Z'
                  fill='#8C9A84'
                  opacity='0.8'
                ></path>
                <path
                  d='M220 140C260 120 280 60 240 40C240 40 200 80 220 140Z'
                  fill='#8C9A84'
                  opacity='0.6'
                ></path>
                <path
                  d='M40 180C10 160 0 200 20 240C20 240 60 220 40 180Z'
                  fill='#8C9A84'
                  opacity='0.7'
                ></path>
              </motion.g>
            </motion.svg>
          </motion.div>

          {/* Info Cards Row */}
          <div className='grid grid-cols-2 gap-6'>
            {/* Card A */}
            <div className='bg-white rounded-[16px] border border-outline-variant p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-500 interactive'>
              <span
                className='material-symbols-outlined text-tertiary text-2xl'
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
              >
                school
              </span>
              <div>
                <div className='font-body-md text-[14px] font-bold text-on-surface'>
                  B.Tech AI/ML
                </div>
                <div className='font-body-md text-[12px] text-primary-container mt-1'>
                  Panimalar Engineering College
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className='bg-white rounded-[16px] border border-outline-variant p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-500 interactive'>
              <span
                className='material-symbols-outlined text-tertiary text-2xl'
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
              >
                location_on
              </span>
              <div>
                <div className='font-body-md text-[14px] font-bold text-on-surface'>
                  Tirupati, AP
                </div>
                <div className='font-body-md text-[12px] text-primary-container mt-1'>
                  Andhra Pradesh, India
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
