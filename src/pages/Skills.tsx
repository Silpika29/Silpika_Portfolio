import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <section className='w-full py-32 px-container-padding'>
      <div className='max-w-[1280px] mx-auto'>
        {/* Section Header */}
        <motion.div
          className='mb-20 flex flex-col items-start gap-4'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          <span className='font-label-caps text-[12px] leading-none uppercase tracking-[0.15em] font-semibold text-prompt-label'>
            Technical Skills
          </span>
          <h2 className='font-headline-md text-[52px] leading-[1.2] font-normal text-prompt-headline tracking-tight'>
            Tools I <span className='italic'>use</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Column 1: Languages */}
          <div className='flex flex-col gap-6'>
            <SkillCard delay={0.15} category='Language' icon='all_inclusive' title='Python' />
            <SkillCard delay={0.2} category='Language' icon='local_cafe' title='Java' />
            <SkillCard delay={0.25} category='Language' icon='data_usage' title='C' />
          </div>

          {/* Column 2: Web Technologies (Soft Clay) */}
          <div className='flex flex-col gap-6 lg:translate-y-stagger-offset'>
            <SkillCard
              delay={0.25}
              category='Web Tech'
              icon='code'
              title='HTML'
              bgClass='bg-prompt-soft-clay'
              textClass='text-on-tertiary-container'
              categoryClass='text-on-surface-variant'
            />
            <SkillCard
              delay={0.3}
              category='Web Tech'
              icon='menu'
              title='CSS'
              bgClass='bg-prompt-soft-clay'
              textClass='text-on-tertiary-container'
              categoryClass='text-on-surface-variant'
            />
            <SkillCard
              delay={0.35}
              category='Web Tech'
              icon='air'
              title='Tailwind CSS'
              bgClass='bg-prompt-soft-clay'
              textClass='text-on-tertiary-container'
              categoryClass='text-on-surface-variant'
            />
          </div>

          {/* Column 3: Data & ML (2x2 Grid) */}
          <div className='flex flex-col gap-6'>
            <div className='grid grid-cols-2 gap-6 h-full'>
              <SmallSkillCard delay={0.35} category='Data' icon='database' title='SQL' />
              <SmallSkillCard delay={0.4} category='Data' icon='eco' title='MongoDB' />
              <SmallSkillCard delay={0.45} icon='hub' title='Machine Learning (R Programming)' />
              <SmallSkillCard delay={0.5} category='Data' icon='bar_chart' title='Data Analytics' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-components for cleaner structure

interface SkillCardProps {
  delay: number;
  category: string;
  icon: string;
  title: string;
  bgClass?: string;
  textClass?: string;
  categoryClass?: string;
}
const SkillCard = ({
  delay,
  category,
  icon,
  title,
  bgClass = 'bg-white',
  textClass = 'text-on-surface',
  categoryClass = 'text-secondary'
}: SkillCardProps) => {
  return (
    <motion.div
      className={`${bgClass} border border-prompt-card-border rounded-3xl p-8 card-hover-bloom group flex flex-col justify-between h-48 interactive`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0, 1], delay }}
    >
      <div className='flex justify-between items-start w-full'>
        <span
          className={`font-label-caps text-[10px] leading-none uppercase tracking-[0.1em] font-semibold ${categoryClass}`}
        >
          {category}
        </span>
        <div className='w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-700'>
          <span
            className='material-symbols-outlined'
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
          >
            {icon}
          </span>
        </div>
      </div>
      <h3 className={`font-headline-md text-[22px] leading-[1.3] font-medium ${textClass}`}>
        {title}
      </h3>
    </motion.div>
  );
};

interface SmallSkillCardProps {
  delay: number;
  category?: string;
  icon: string;
  title: string;
}
const SmallSkillCard = ({ delay, category, icon, title }: SmallSkillCardProps) => {
  return (
    <motion.div
      className='bg-white border border-prompt-card-border rounded-3xl p-6 card-hover-bloom group flex flex-col justify-between aspect-square interactive'
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0, 1], delay }}
    >
      <div className='w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-700 mb-4'>
        <span
          className='material-symbols-outlined text-[18px]'
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
        >
          {icon}
        </span>
      </div>
      <div>
        <h3 className='font-headline-md text-[18px] leading-tight text-on-surface mb-2 font-medium'>
          {title}
        </h3>
        {category && (
          <span className='font-label-caps text-[10px] leading-none uppercase tracking-[0.1em] font-semibold text-secondary'>
            {category}
          </span>
        )}
      </div>
    </motion.div>
  );
};
