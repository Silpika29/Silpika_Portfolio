import { motion } from 'framer-motion';

export const Awards = () => {
  return (
    <main className='w-full px-container-padding py-32 max-w-7xl mx-auto relative z-10'>
      {/* Section Header */}
      <motion.header
        className='mb-24 max-w-2xl'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className='block font-label-caps text-label-caps text-[#8C9A84] mb-4 tracking-[0.15em] uppercase'>
          Recognition
        </span>
        <h2 className='font-emphasis text-[52px] leading-[60px] text-[#C27B66] tracking-tight'>
          Awards &amp; <span className='italic'>Certifications</span>
        </h2>
      </motion.header>

      {/* Two Column Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-gutter mb-32'>
        {/* Left Column: Achievements */}
        <motion.div
          className='lg:col-span-5'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className='flex flex-col gap-8'>
            <AchievementItem
              icon='emoji_events'
              text='Best Project Award – Education Support Web Platform'
              hasBadge
            />
            <AchievementItem icon='star' text='Participant in Smart India Hackathon (SIH)' />
            <AchievementItem icon='lightbulb' text='Participant in Ideathon' />
            <AchievementItem icon='shield' text='Attended Ethical Hacking Workshop' />
          </div>
        </motion.div>

        {/* Right Column: Certifications Bento Grid */}
        <motion.div
          className='lg:col-span-7 lg:translate-y-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Cert 1 */}
            <CertCard
              icon={
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9 9 0 100-18 9 9 0 000 18z M12 12l3.5 3.5 M12 12V6'
                />
              }
              iconColor='text-[#C27B66]'
              title='Oracle – Generative AI'
            />

            {/* Cert 2 */}
            <CertCard
              icon={
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
                />
              }
              iconColor='text-[#8C9A84]'
              title='NASSCOM – Acquiring Data'
              score='78% Score'
              offset
            />

            {/* Cert 3 */}
            <CertCard
              icon={
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              }
              iconColor='text-[#C27B66]'
              title='OpenAI Generative Pre-Trained Transformer 3 (GPT-3) for Developers'
            />

            {/* Cert 4 */}
            <CertCard
              icon={
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z'
                />
              }
              iconColor='text-[#8C9A84]'
              title='Prompt Engineering'
              offset
            />
          </div>
        </motion.div>
      </div>

      {/* Languages Strip */}
      <motion.div
        className='mt-32 border-t border-[#DCCFC2]/30 pt-16'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className='block font-label-caps text-label-caps text-secondary mb-8 tracking-[0.15em] uppercase text-center md:text-left'>
          Languages
        </span>
        <div className='flex flex-wrap items-center justify-center md:justify-start gap-4'>
          <LanguageBadge lang='English' level='Professional Proficiency' type='dark' />
          <LanguageBadge lang='Telugu' level='Professional Proficiency' type='dark' />
          <LanguageBadge lang='Tamil' level='Conversational' type='clay' />
          <LanguageBadge lang='Hindi' level='Basic' type='outline' />
        </div>
      </motion.div>
    </main>
  );
};

interface AchievementItemProps {
  icon: string;
  text: string;
  hasBadge?: boolean;
}
const AchievementItem = ({ icon, text, hasBadge }: AchievementItemProps) => (
  <div className='flex items-center gap-6 group interactive'>
    <div className='w-14 h-14 rounded-full bg-[#DCCFC2] flex items-center justify-center shrink-0 relative transition-transform duration-700 group-hover:scale-105'>
      <span
        className='material-symbols-outlined text-secondary'
        style={{ fontVariationSettings: hasBadge ? "'FILL' 1" : "'FILL' 0" }}
      >
        {icon}
      </span>
      {hasBadge && (
        <div className='absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C27B66]'></div>
      )}
    </div>
    <p className='font-body-md text-body-md text-on-surface-variant group-hover:text-tertiary transition-colors duration-500'>
      {text}
    </p>
  </div>
);

interface CertCardProps {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  score?: string;
  offset?: boolean;
}
const CertCard = ({ icon, iconColor, title, score, offset }: CertCardProps) => (
  <div
    className={`bg-white rounded-2xl p-8 organic-hover flex flex-col justify-between min-h-[200px] interactive ${offset ? 'sm:translate-y-12' : ''}`}
  >
    <div className={`flex justify-between items-start mb-6 ${!score ? 'block' : ''}`}>
      <div className={`w-10 h-10 ${iconColor} ${!score ? 'mb-6' : ''}`}>
        <svg
          className='w-full h-full'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
        >
          {icon}
        </svg>
      </div>
      {score && (
        <span className='bg-[#DCCFC2] text-[#4E453C] font-label-caps text-[10px] px-3 py-1 rounded-full uppercase tracking-wider'>
          {score}
        </span>
      )}
    </div>
    <p className='font-emphasis text-[22px] leading-tight text-on-surface'>{title}</p>
  </div>
);

interface LanguageBadgeProps {
  lang: string;
  level: string;
  type: 'dark' | 'clay' | 'outline';
}
const LanguageBadge = ({ lang, level, type }: LanguageBadgeProps) => {
  if (type === 'dark') {
    return (
      <div className='bg-[#2D3A31] text-white px-6 py-3 rounded-full flex items-center gap-2 interactive'>
        <span className='font-label-caps text-sm tracking-wider uppercase'>{lang}</span>
        <span className='w-1 h-1 rounded-full bg-white/50 mx-1'></span>
        <span className='font-body-md text-xs text-white/70'>{level}</span>
      </div>
    );
  }

  if (type === 'clay') {
    return (
      <div className='bg-[#DCCFC2] text-[#4E453C] px-6 py-3 rounded-full flex items-center gap-2 interactive'>
        <span className='font-label-caps text-sm tracking-wider uppercase'>{lang}</span>
        <span className='w-1 h-1 rounded-full bg-[#4E453C]/30 mx-1'></span>
        <span className='font-body-md text-xs text-[#4E453C]/70'>{level}</span>
      </div>
    );
  }

  return (
    <div className='bg-white border border-[#DCCFC2] text-secondary px-6 py-3 rounded-full flex items-center gap-2 interactive'>
      <span className='font-label-caps text-sm tracking-wider uppercase'>{lang}</span>
      <span className='w-1 h-1 rounded-full bg-outline-variant mx-1'></span>
      <span className='font-body-md text-xs text-outline'>{level}</span>
    </div>
  );
};
