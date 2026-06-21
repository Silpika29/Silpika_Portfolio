import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full bg-[#2D3A31] text-white flex flex-col items-center justify-center py-section-gap px-container-padding relative z-10'
    >
      <div className='w-full max-w-4xl mx-auto text-center space-y-12'>
        {/* Header Group */}
        <motion.div
          className='space-y-6'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className='font-label-caps text-label-caps uppercase tracking-[0.2em] text-[#8C9A84] block'>
            Contact
          </span>
          <h1 className='font-display-xl text-display-lg-mobile md:text-display-xl text-white'>
            Let's <span className='italic font-light'>work</span> together
          </h1>
          <p className='font-body-lg text-body-lg text-[#DCCFC2] max-w-2xl mx-auto'>
            Open to internship opportunities, collaborations, and research roles in AI/ML.
          </p>
        </motion.div>

        {/* Contact Details List */}
        <motion.div
          className='flex flex-col items-center gap-6 py-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Email */}
          <a
            className='flex items-center gap-4 group interactive'
            href='mailto:silpikajattimyni@gmail.com'
          >
            <span className='material-symbols-outlined text-white opacity-80 group-hover:opacity-100 transition-opacity duration-500'>
              mail
            </span>
            <span className='font-body-md text-body-md text-white border-b border-transparent group-hover:border-white transition-colors duration-500 pb-1'>
              silpikajattimyni@gmail.com
            </span>
          </a>

          {/* Location */}
          <div className='flex items-center gap-4 group'>
            <span className='material-symbols-outlined text-white opacity-80'>location_on</span>
            <span className='font-body-md text-body-md text-white pb-1'>
              Tirupati, Andhra Pradesh, India
            </span>
          </div>
        </motion.div>

        {/* Social Pills */}
        <motion.div
          className='flex flex-wrap justify-center gap-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <a
            className='px-6 py-3 rounded-full border border-[#8C9A84] text-white font-body-md text-body-md hover:bg-white/5 transition-colors duration-500 interactive flex items-center gap-2'
            href='https://www.linkedin.com/in/silpika-jattimyni-394885297'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn Profile
            <span className='material-symbols-outlined text-sm'>arrow_outward</span>
          </a>
          <a
            className='px-6 py-3 rounded-full border border-[#8C9A84] text-white font-body-md text-body-md hover:bg-white/5 transition-colors duration-500 interactive flex items-center gap-2'
            href='#'
          >
            LeetCode: Silpika_J
            <span className='material-symbols-outlined text-sm'>arrow_outward</span>
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          className='pt-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <a
            className='inline-block bg-[#C27B66] text-white font-emphasis text-[18px] px-8 py-4 rounded-full hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-700 ease-out interactive shadow-lg shadow-[#131e0f]/20'
            href='mailto:silpikajattimyni@gmail.com'
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
