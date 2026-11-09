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

          {/* Project Card 3: Saree Try On Virtually */}
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
                  d='M120 40 L200 70 L280 40 L240 120 L200 160 L160 120 Z'
                  fill='none'
                  stroke='#8C9A84'
                  strokeWidth='1'
                ></path>
                <path
                  d='M120 40 Q 150 110 200 160 T 310 170'
                  fill='none'
                  stroke='#8C9A84'
                  strokeDasharray='3 3'
                  strokeWidth='1.2'
                ></path>
                <path
                  d='M200 70 Q 240 110 280 160'
                  fill='none'
                  stroke='#8C9A84'
                  strokeWidth='0.8'
                ></path>
                <circle cx='120' cy='40' fill='#8C9A84' r='3.5'></circle>
                <circle cx='200' cy='70' fill='#8C9A84' r='4'></circle>
                <circle cx='280' cy='40' fill='#8C9A84' r='3.5'></circle>
                <circle cx='160' cy='120' fill='#8C9A84' r='3'></circle>
                <circle cx='240' cy='120' fill='#8C9A84' r='3'></circle>
                <circle cx='200' cy='160' fill='#C27B66' r='4.5'></circle>
                <line
                  x1='60'
                  y1='100'
                  x2='340'
                  y2='100'
                  stroke='#8C9A84'
                  strokeDasharray='4 4'
                  strokeWidth='0.6'
                  opacity='0.5'
                ></line>
                <circle cx='60' cy='100' fill='#8C9A84' r='2.5'></circle>
                <circle cx='340' cy='100' fill='#8C9A84' r='2.5'></circle>
              </svg>
              {/* GitHub Link Button */}
              <a
                href='https://github.com/Silpika29/Saree_Try_On_Virtually'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute top-6 right-6 bg-[#C27B66] text-white hover:bg-[#a86552] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-10 transition-colors duration-300 font-label-caps text-[10px] tracking-wider interactive'
                title='View GitHub Repository'
              >
                <svg
                  fill='currentColor'
                  height='12'
                  viewBox='0 0 24 24'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                </svg>
                <span className='font-label-caps text-[10px] tracking-wider'>GitHub</span>
                <svg
                  className='w-2.5 h-2.5'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M7 17L17 7M17 7H7M17 7V17' />
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className='p-10 flex flex-col flex-grow'>
              <div className='mb-6'>
                <span className='font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-2 block'>
                  Computer Vision &amp; Web Platform
                </span>
                <h2 className='font-display-lg text-3xl text-dark-green'>
                  <a
                    href='https://github.com/Silpika29/Saree_Try_On_Virtually'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-[#C27B66] transition-colors duration-300 interactive'
                  >
                    Saree Try On Virtually
                  </a>
                </h2>
              </div>
              <p className='font-body-md text-[15px] text-secondary leading-relaxed mb-8 flex-grow'>
                A virtual try-on application using computer vision and MediaPipe pose estimation to
                overlay and drape sarees in real time. Features live camera feed tracking,
                responsive garment alignment, and catalog browsing.
              </p>
              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-stone-border/40'>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  FastAPI
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  MediaPipe
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  OpenCV
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  React
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  TypeScript
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  WebSockets
                </span>
                <a
                  href='https://github.com/Silpika29/Saree_Try_On_Virtually'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-dark-green hover:bg-[#C27B66] text-white px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider transition-colors duration-300 interactive flex items-center gap-1.5 shadow-sm'
                >
                  <svg
                    fill='currentColor'
                    height='11'
                    viewBox='0 0 24 24'
                    width='11'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                  </svg>
                  <span>GitHub</span>
                  <svg
                    className='w-2.5 h-2.5'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7 17L17 7M17 7H7M17 7V17' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>

          {/* Project Card 4: Nomad-Care */}
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
                  d='M0 60 Q 100 120 200 60 T 400 60'
                  fill='none'
                  opacity='0.6'
                  stroke='white'
                  strokeWidth='1.2'
                ></path>
                <path
                  d='M0 110 L130 110 L145 75 L160 145 L175 90 L185 110 L400 110'
                  fill='none'
                  opacity='0.75'
                  stroke='white'
                  strokeWidth='1.5'
                ></path>
                <circle cx='145' cy='75' fill='white' opacity='0.8' r='3'></circle>
                <circle cx='160' cy='145' fill='white' opacity='0.9' r='3.5'></circle>
                <circle cx='175' cy='90' fill='white' opacity='0.8' r='3'></circle>
                <circle
                  cx='300'
                  cy='110'
                  fill='none'
                  stroke='white'
                  strokeDasharray='2 2'
                  strokeWidth='1'
                  r='18'
                  opacity='0.5'
                ></circle>
                <circle cx='300' cy='110' fill='white' opacity='0.7' r='3'></circle>
                <path
                  d='M0 150 Q 100 90 200 150 T 400 150'
                  fill='none'
                  opacity='0.3'
                  stroke='white'
                  strokeWidth='0.8'
                ></path>
              </svg>
              {/* GitHub Link Button */}
              <a
                href='https://github.com/Silpika29/Nomad-Care'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute top-6 right-6 bg-[#C27B66] text-white hover:bg-[#a86552] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-10 transition-colors duration-300 font-label-caps text-[10px] tracking-wider interactive'
                title='View GitHub Repository'
              >
                <svg
                  fill='currentColor'
                  height='12'
                  viewBox='0 0 24 24'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                </svg>
                <span className='font-label-caps text-[10px] tracking-wider'>GitHub</span>
                <svg
                  className='w-2.5 h-2.5'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M7 17L17 7M17 7H7M17 7V17' />
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className='p-10 flex flex-col flex-grow'>
              <div className='mb-6'>
                <span className='font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-2 block'>
                  Mobile Healthcare Application
                </span>
                <h2 className='font-display-lg text-3xl text-dark-green'>
                  <a
                    href='https://github.com/Silpika29/Nomad-Care'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-[#C27B66] transition-colors duration-300 interactive'
                  >
                    Nomad-Care
                  </a>
                </h2>
              </div>
              <p className='font-body-md text-[15px] text-secondary leading-relaxed mb-8 flex-grow'>
                A cross-platform mobile healthcare companion for travelers and digital nomads.
                Features location-aware doctor discovery, real-time medical symptom translation,
                emergency hotline access, and appointment scheduling.
              </p>
              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/30'>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Flutter
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Dart
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Clean Architecture
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Cross-Platform
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  REST API
                </span>
                <a
                  href='https://github.com/Silpika29/Nomad-Care'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-dark-green hover:bg-[#C27B66] text-white px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider transition-colors duration-300 interactive flex items-center gap-1.5 shadow-sm'
                >
                  <svg
                    fill='currentColor'
                    height='11'
                    viewBox='0 0 24 24'
                    width='11'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                  </svg>
                  <span>GitHub</span>
                  <svg
                    className='w-2.5 h-2.5'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7 17L17 7M17 7H7M17 7V17' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>

          {/* Project Card 5: Atmospheric Observation Data Monitoring and Anomaly Detection System */}
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
                  d='M40 140 Q 90 60 140 110 T 240 85 T 340 130'
                  fill='none'
                  stroke='#8C9A84'
                  strokeWidth='1.4'
                ></path>
                <path
                  d='M40 110 Q 110 150 180 100 T 320 60 T 380 90'
                  fill='none'
                  stroke='#8C9A84'
                  strokeDasharray='3 3'
                  strokeWidth='1'
                  opacity='0.7'
                ></path>
                <line
                  x1='30'
                  y1='70'
                  x2='370'
                  y2='70'
                  stroke='#8C9A84'
                  strokeDasharray='4 4'
                  strokeWidth='0.8'
                  opacity='0.5'
                ></line>
                <circle cx='90' cy='85' fill='#8C9A84' r='3.5'></circle>
                <circle cx='140' cy='110' fill='#8C9A84' r='3.5'></circle>
                <circle cx='190' cy='95' fill='#8C9A84' r='3.5'></circle>
                <circle cx='240' cy='85' fill='#C27B66' r='4.5'></circle>
                <circle
                  cx='240'
                  cy='85'
                  fill='none'
                  stroke='#C27B66'
                  strokeWidth='1.2'
                  strokeDasharray='2 2'
                  r='10'
                ></circle>
                <circle cx='290' cy='115' fill='#8C9A84' r='3.5'></circle>
                <circle cx='340' cy='130' fill='#8C9A84' r='3.5'></circle>
              </svg>
              {/* GitHub Link Button */}
              <a
                href='https://github.com/Silpika29/Atmospheric-Observation-Data-Monitoring-and-Detection-System'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute top-6 right-6 bg-[#C27B66] text-white hover:bg-[#a86552] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-10 transition-colors duration-300 font-label-caps text-[10px] tracking-wider interactive'
                title='View GitHub Repository'
              >
                <svg
                  fill='currentColor'
                  height='12'
                  viewBox='0 0 24 24'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                </svg>
                <span className='font-label-caps text-[10px] tracking-wider'>GitHub</span>
                <svg
                  className='w-2.5 h-2.5'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M7 17L17 7M17 7H7M17 7V17' />
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className='p-10 flex flex-col flex-grow'>
              <div className='mb-6'>
                <span className='font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-2 block'>
                  Educational Prototype &amp; Data Validation
                </span>
                <h2 className='font-display-lg text-3xl text-dark-green'>
                  <a
                    href='https://github.com/Silpika29/Atmospheric-Observation-Data-Monitoring-and-Detection-System'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-[#C27B66] transition-colors duration-300 interactive'
                  >
                    Atmospheric Observation Data Monitoring &amp; Anomaly Detection System
                  </a>
                </h2>
              </div>
              <p className='font-body-md text-[15px] text-secondary leading-relaxed mb-8 flex-grow'>
                An educational scientific monitoring prototype built with sample data to validate
                atmospheric surface observations, detect sensor anomalies via rule-based checks, and
                generate SHA-256 data audit logs.
              </p>
              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-stone-border/40'>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  Python
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  FastAPI
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  Pandas
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  React
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  TypeScript
                </span>
                <span className='bg-[#DCCFC2] text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider'>
                  Recharts
                </span>
                <a
                  href='https://github.com/Silpika29/Atmospheric-Observation-Data-Monitoring-and-Detection-System'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-dark-green hover:bg-[#C27B66] text-white px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider transition-colors duration-300 interactive flex items-center gap-1.5 shadow-sm'
                >
                  <svg
                    fill='currentColor'
                    height='11'
                    viewBox='0 0 24 24'
                    width='11'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                  </svg>
                  <span>GitHub</span>
                  <svg
                    className='w-2.5 h-2.5'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7 17L17 7M17 7H7M17 7V17' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>

          {/* Project Card 6: Mine Minds Rover */}
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
                  d='M30 160 L100 120 L180 140 L260 70 L340 100 L370 60'
                  fill='none'
                  opacity='0.8'
                  stroke='white'
                  strokeWidth='1.5'
                ></path>
                <path
                  d='M30 125 L100 85 L180 105 L260 35 L340 65 L370 25'
                  fill='none'
                  opacity='0.35'
                  stroke='white'
                  strokeDasharray='4 4'
                  strokeWidth='0.9'
                ></path>
                <path
                  d='M30 195 L100 155 L180 175 L260 105 L340 135 L370 95'
                  fill='none'
                  opacity='0.35'
                  stroke='white'
                  strokeDasharray='4 4'
                  strokeWidth='0.9'
                ></path>
                <circle cx='100' cy='120' fill='white' opacity='0.7' r='3.5'></circle>
                <circle cx='180' cy='140' fill='white' opacity='0.7' r='3.5'></circle>
                <circle cx='260' cy='70' fill='white' opacity='0.95' r='5'></circle>
                <circle
                  cx='260'
                  cy='70'
                  fill='none'
                  stroke='white'
                  strokeWidth='1.2'
                  strokeDasharray='2 2'
                  r='14'
                  opacity='0.7'
                ></circle>
                <circle cx='340' cy='100' fill='white' opacity='0.7' r='3.5'></circle>
              </svg>
              {/* GitHub Link Button */}
              <a
                href='https://github.com/Silpika29/mine-minds-rover'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute top-6 right-6 bg-[#C27B66] text-white hover:bg-[#a86552] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm z-10 transition-colors duration-300 font-label-caps text-[10px] tracking-wider interactive'
                title='View GitHub Repository'
              >
                <svg
                  fill='currentColor'
                  height='12'
                  viewBox='0 0 24 24'
                  width='12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                </svg>
                <span className='font-label-caps text-[10px] tracking-wider'>GitHub</span>
                <svg
                  className='w-2.5 h-2.5'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M7 17L17 7M17 7H7M17 7V17' />
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className='p-10 flex flex-col flex-grow'>
              <div className='mb-6'>
                <span className='font-label-caps text-[11px] uppercase tracking-widest text-secondary mb-2 block'>
                  IoT Robotics &amp; Explainable AI
                </span>
                <h2 className='font-display-lg text-3xl text-dark-green'>
                  <a
                    href='https://github.com/Silpika29/mine-minds-rover'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-[#C27B66] transition-colors duration-300 interactive'
                  >
                    Mine Minds Rover
                  </a>
                </h2>
              </div>
              <p className='font-body-md text-[15px] text-secondary leading-relaxed mb-8 flex-grow'>
                An autonomous underground mining safety rover and digital patrol system combining
                IoT hardware telemetry with a dual-layer safety engine—providing real-time hazard
                alerts and Explainable AI (XAI) risk analysis.
              </p>
              {/* Tags */}
              <div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/30'>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  FastAPI
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  React
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  scikit-learn
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  Random Forest
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  IoT
                </span>
                <span className='bg-white text-dark-green px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider shadow-sm'>
                  TypeScript
                </span>
                <a
                  href='https://github.com/Silpika29/mine-minds-rover'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-dark-green hover:bg-[#C27B66] text-white px-4 py-1.5 rounded-full font-label-caps text-[11px] tracking-wider transition-colors duration-300 interactive flex items-center gap-1.5 shadow-sm'
                >
                  <svg
                    fill='currentColor'
                    height='11'
                    viewBox='0 0 24 24'
                    width='11'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'></path>
                  </svg>
                  <span>GitHub</span>
                  <svg
                    className='w-2.5 h-2.5'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M7 17L17 7M17 7H7M17 7V17' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};
