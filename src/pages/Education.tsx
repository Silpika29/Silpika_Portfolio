import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className='relative w-full py-32 px-container-padding flex justify-center items-center overflow-hidden'>
      <div className='max-w-[900px] w-full mx-auto relative z-20'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-24 flex flex-col items-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className='font-label-caps text-label-caps tracking-[0.15em] text-primary-container uppercase'>
            Education
          </span>
          <h2 className='font-display-lg text-[52px] leading-[60px] text-on-surface tracking-tight'>
            My <em className='italic text-primary'>academic</em> journey
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className='relative w-full pb-16'>
          {/* Central SVG Line (Desktop) / Left SVG Line (Mobile) */}
          <div className='absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0 bg-line/30'>
            <motion.div
              className='w-full bg-[#E6E2DA] origin-top'
              style={{ scaleY, height: '100%' }}
            />
          </div>

          {/* Entries List */}
          <div className='relative z-10 flex flex-col gap-16 md:gap-32'>
            {/* Entry 1: Panimalar Engineering College */}
            <div className='timeline-entry flex flex-col md:flex-row items-start w-full relative group'>
              {/* Timeline Dot */}
              <motion.div
                className='absolute left-6 md:left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-dot border-4 border-primary-container z-20 transition-transform duration-500 group-hover:scale-125'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
              />

              {/* Left Content */}
              <div className='w-full md:w-1/2 md:pr-16 pl-16 md:pl-0 pt-6 md:pt-0'>
                <motion.div
                  className='bg-surface-container-lowest rounded-3xl border border-line p-9 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(45,58,49,0.06)] transition-all duration-700 ease-out group-hover:-translate-y-2 interactive'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
                    <span className='font-label-caps text-label-caps text-secondary tracking-widest uppercase'>
                      2023 – 2027
                    </span>
                    <span className='inline-block px-3 py-1 bg-dot text-white font-label-caps text-[10px] tracking-widest uppercase rounded-full'>
                      Currently Pursuing
                    </span>
                  </div>
                  <h3 className='font-display-lg text-[24px] leading-[32px] text-on-surface mb-2'>
                    Panimalar Engineering College, Chennai
                  </h3>
                  <p className='font-body-md text-secondary mb-8'>
                    B.Tech – Artificial Intelligence & Machine Learning
                  </p>
                  <div className='flex items-baseline gap-2 border-t border-line/50 pt-6 mt-4'>
                    <span className='font-label-caps text-label-caps text-secondary uppercase tracking-widest'>
                      CGPA
                    </span>
                    <span className='font-display-lg text-[48px] leading-none text-primary ml-auto'>
                      8.8
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className='hidden md:block w-1/2'></div>
            </div>

            {/* Entry 2: Viswasai Jr. College */}
            <div className='timeline-entry flex flex-col md:flex-row items-start w-full relative group'>
              {/* Timeline Dot */}
              <motion.div
                className='absolute left-6 md:left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-line z-20 transition-colors duration-500 group-hover:bg-primary-container'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
              />

              <div className='hidden md:block w-1/2 md:pr-16'></div>

              {/* Right Content */}
              <div className='w-full md:w-1/2 md:pl-16 pl-16 md:pl-0 pt-6 md:pt-0'>
                <motion.div
                  className='bg-card2 rounded-3xl p-7 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(45,58,49,0.06)] transition-all duration-700 ease-out group-hover:-translate-y-2 interactive'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <span className='block font-label-caps text-label-caps text-on-secondary-container tracking-widest uppercase mb-4 opacity-80'>
                    2021 - 2023
                  </span>
                  <h3 className='font-body-lg text-on-surface mb-1 font-semibold'>
                    Viswasai Jr. College
                  </h3>
                  <p className='font-body-md text-on-secondary-container mb-6 opacity-90'>
                    Class XII – Higher Secondary Education
                  </p>
                  <div className='flex items-baseline gap-2 pt-2'>
                    <span className='font-label-caps text-[10px] text-on-secondary-container uppercase tracking-widest opacity-80'>
                      Score
                    </span>
                    <span className='font-display-lg text-[36px] leading-none text-tertiary-container mix-blend-multiply ml-auto'>
                      91.6%
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Entry 3: Bharatiya Vidya Bhavan */}
            <div className='timeline-entry flex flex-col md:flex-row items-start w-full relative group'>
              {/* Timeline Dot */}
              <motion.div
                className='absolute left-6 md:left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-line z-20 transition-colors duration-500 group-hover:bg-primary-container'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
              />

              {/* Left Content */}
              <div className='w-full md:w-1/2 md:pr-16 pl-16 md:pl-0 pt-6 md:pt-0'>
                <motion.div
                  className='bg-card2 rounded-3xl p-7 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(45,58,49,0.06)] transition-all duration-700 ease-out group-hover:-translate-y-2 interactive'
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <span className='block font-label-caps text-label-caps text-on-secondary-container tracking-widest uppercase mb-4 opacity-80'>
                    2020 – 2021
                  </span>
                  <h3 className='font-body-lg text-on-surface mb-1 font-semibold'>
                    Bharatiya Vidya Bhavan, SV Vidyalaya
                  </h3>
                  <p className='font-body-md text-on-secondary-container mb-6 opacity-90'>
                    Class X – Secondary Education
                  </p>
                  <div className='flex items-baseline gap-2 pt-2'>
                    <span className='font-label-caps text-[10px] text-on-secondary-container uppercase tracking-widest opacity-80'>
                      Score
                    </span>
                    <span className='font-display-lg text-[36px] leading-none text-tertiary-container mix-blend-multiply ml-auto'>
                      84%
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className='hidden md:block w-1/2'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
