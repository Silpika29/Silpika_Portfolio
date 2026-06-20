import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <div className='pt-32 pb-section-gap px-container-padding max-w-7xl mx-auto'>
      {/* Section Header */}
      <motion.header
        className='mb-20 flex flex-col items-center text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className='font-label-caps text-label-caps uppercase tracking-[0.25em] text-brand-sage mb-4 block'>
          Experience
        </span>
        <h2 className='font-display-lg text-[52px] leading-tight text-brand-forest mb-6'>
          Where I've <span className='italic text-brand-terra'>worked</span>
        </h2>
        <svg
          className='w-24 h-4 text-brand-clay'
          fill='none'
          viewBox='0 0 100 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 10C25 10 25 0 50 0C75 0 75 20 100 20'
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth='1'
          ></path>
        </svg>
      </motion.header>

      {/* Experience Grid */}
      <div className='flex flex-col md:flex-row gap-8 items-stretch relative'>
        {/* Card 1: NARL ISRO (Hero Card) */}
        <motion.article
          className='w-full md:w-[60%] bg-white border border-brand-stone rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-soft-lift transform hover:-translate-y-2 transition-all duration-700 ease-out group relative overflow-hidden flex flex-col justify-between interactive'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          {/* Background Decoration */}
          <div className='absolute right-[-10%] top-[-10%] w-64 h-64 opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3'>
            <svg
              className='text-brand-clay w-full h-full stroke-current stroke-[2px]'
              fill='none'
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='50' cy='50' r='40' strokeDasharray='4 4'></circle>
              <path d='M50 10 L50 90 M10 50 L90 50' strokeWidth='1'></path>
              <circle cx='50' cy='50' r='20'></circle>
              <path d='M30 30 Q50 10 70 30' fill='currentColor' fillOpacity='0.2'></path>
            </svg>
          </div>

          <div className='relative z-10'>
            <div className='flex flex-wrap items-center gap-3 mb-6'>
              <span className='inline-flex items-center px-3 py-1 bg-brand-forest text-white text-[11px] font-semibold tracking-wider uppercase rounded-full'>
                Featured Internship
              </span>
              <span className='inline-flex items-center px-3 py-1 bg-brand-alabaster border border-brand-stone text-brand-forest text-[11px] font-semibold tracking-wider uppercase rounded-full'>
                June 2025 – July 2025
              </span>
            </div>

            <h3 className='text-brand-sage text-[14px] uppercase font-bold tracking-widest mb-2'>
              National Atmospheric Research Laboratory (NARL), ISRO
            </h3>
            <h4 className='font-display-lg text-[36px] font-bold text-brand-forest mb-8 leading-tight'>
              AI/ML Research Intern
            </h4>

            <ul className='space-y-4 font-body-md text-brand-forest/80 text-base'>
              <li className='bullet-point'>
                Developed state-of-the-art Deep Learning (DL) architectures for processing extensive
                atmospheric datasets
              </li>
              <li className='bullet-point'>
                Integrated meteorological variables (e.g., temperature, humidity) using Advanced
                Transformers and RNNs
              </li>
              <li className='bullet-point'>
                Enhanced data accuracy and predictive capabilities for critical weather patterns
              </li>
              <li className='bullet-point'>
                Optimized complex spatial datasets to identify precise correlations and trends
                within atmospheric metrics
              </li>
            </ul>
          </div>
        </motion.article>

        {/* Card 2: British Airways */}
        <motion.article
          className='w-full md:w-[38%] bg-brand-clay/30 rounded-3xl p-8 md:p-9 hover:shadow-soft-lift transform md:translate-y-12 hover:-translate-y-2 md:hover:translate-y-10 transition-all duration-700 ease-out group flex flex-col interactive'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <div className='mb-auto'>
            <h3 className='text-brand-forest/60 text-[14px] uppercase font-bold tracking-widest mb-2 mt-4'>
              British Airways
            </h3>
            <h4 className='font-display-lg text-[28px] font-bold text-brand-forest mb-6 leading-tight'>
              Machine Learning Intern
            </h4>
            <ul className='space-y-4 font-body-md text-brand-forest/80 text-base mb-8'>
              <li className='bullet-point'>
                Assessed predictive accuracy leveraging customer data to identify prospective
                booking behavior
              </li>
            </ul>
          </div>

          <div className='flex flex-wrap gap-2 mt-6'>
            <span className='px-3 py-1 bg-white/80 text-brand-forest text-xs font-semibold rounded-full border border-white'>
              Machine Learning
            </span>
            <span className='px-3 py-1 bg-white/80 text-brand-forest text-xs font-semibold rounded-full border border-white'>
              Predictive Modeling
            </span>
            <span className='px-3 py-1 bg-white/80 text-brand-forest text-xs font-semibold rounded-full border border-white'>
              Data Analysis
            </span>
          </div>
        </motion.article>
      </div>
    </div>
  );
};
