import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <div className='pt-32 pb-32'>
      <section className='max-w-[1280px] mx-auto px-container-padding'>
        {/* Header Section */}
        <motion.div
          className='mb-20'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className='font-label-caps text-xs uppercase tracking-[0.2em] text-[#8C9A84] mb-4 block'>
            Projects
          </span>
          <h1 className='font-display-xl text-5xl md:text-[52px] text-dark-green leading-tight'>
            Things I've <em className='text-[#C27B66] font-normal'>built</em>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {/* Project Card 1 */}
          <motion.article
            className='bg-white rounded-3xl border border-[#E6E2DA] overflow-hidden card-hover-effect relative interactive flex flex-col h-full'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Top Visual */}
            <div className='h-[200px] bg-dark-green relative overflow-hidden flex items-center justify-center'>
              <svg
                className='w-full h-full absolute inset-0 opacity-40'
                preserveAspectRatio='none'
                viewBox='0 0 400 200'
              >
                <path
                  d='M50 100 L150 50 L250 150 L350 100'
                  fill='none'
                  stroke='#8C9A84'
                  strokeWidth='1'
                ></path>
                <circle cx='50' cy='100' fill='#8C9A84' r='4'></circle>
                <circle cx='150' cy='50' fill='#8C9A84' r='4'></circle>
                <circle cx='250' cy='150' fill='#8C9A84' r='4'></circle>
                <circle cx='350' cy='100' fill='#8C9A84' r='4'></circle>
                <path
                  d='M150 50 L200 100 L250 150'
                  fill='none'
                  stroke='#8C9A84'
                  strokeDasharray='4 4'
                  strokeWidth='1'
                ></path>
                <circle cx='200' cy='100' fill='#8C9A84' r='3'></circle>
              </svg>
              {/* Award Badge */}
              <div className='absolute top-6 right-6 bg-[#C27B66] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-10'>
                <svg
                  fill='currentColor'
                  height='12'
                  viewBox='0 0 24 24'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'></path>
                </svg>
                <span className='font-label-caps text-[10px] tracking-wider'>
                  Best Project Award
                </span>
              </div>
            </div>

            {/* Content */}
            <div className='p-10 flex flex-col flex-grow'>
              <h2 className='font-display-lg text-3xl mb-6 text-dark-green'>
                Education Support – Web Platform
              </h2>
              <p className='font-body-md text-[15px] text-secondary leading-relaxed mb-8 flex-grow'>
                A web-based platform that connects volunteers, subject experts, and sponsors to
                support the education of underprivileged children. Facilitates collaboration,
                resource sharing, and sponsorship opportunities.
              </p>
              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-stone-border/40'>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  HTML
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  CSS
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  JavaScript
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  Web Platform
                </span>
              </div>
            </div>
          </motion.article>

          {/* Project Card 2 */}
          <motion.article
            className='bg-[#DCCFC2] rounded-3xl overflow-hidden card-hover-effect relative md:translate-y-12 interactive flex flex-col h-full'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Top Visual */}
            <div className='h-[200px] bg-[#8C9A84] relative overflow-hidden flex items-center justify-center'>
              <svg
                className='w-full h-full absolute inset-0 opacity-50'
                preserveAspectRatio='none'
                viewBox='0 0 400 200'
              >
                <path
                  d='M0 100 Q 50 50 100 100 T 200 100 T 300 100 T 400 100'
                  fill='none'
                  opacity='0.7'
                  stroke='white'
                  strokeWidth='1.5'
                ></path>
                <path
                  d='M0 120 Q 75 40 150 120 T 300 120 T 400 120'
                  fill='none'
                  opacity='0.4'
                  stroke='white'
                  strokeWidth='1'
                ></path>
                <path
                  d='M0 80 Q 60 140 120 80 T 240 80 T 400 80'
                  fill='none'
                  opacity='0.3'
                  stroke='white'
                  strokeWidth='0.5'
                ></path>
              </svg>
            </div>

            {/* Content */}
            <div className='p-10 flex flex-col flex-grow'>
              <div className='mb-6'>
                <span className='font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-2 block'>
                  Machine Learning Project
                </span>
                <h2 className='font-display-lg text-3xl text-dark-green'>AI Music Generator</h2>
              </div>
              <p className='font-body-md text-[15px] text-secondary leading-relaxed mb-8 flex-grow'>
                An AI-based music generation system using LSTM neural networks to generate musical
                patterns autonomously.
              </p>
              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/30'>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Python
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  LSTM
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Neural Networks
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Machine Learning
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};
