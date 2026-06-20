export const Footer = () => {
  return (
    <footer className='w-full border-t border-[#8C9A84]/20 py-8 px-container-padding relative z-10 bg-[#2D3A31]'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
        {/* Copyright */}
        <div className='font-body-md text-body-md text-[#DCCFC2]'>
          © {new Date().getFullYear()} Silpika Jattimyni. All rights reserved.
        </div>

        {/* Ghost Links */}
        <nav className='flex flex-wrap justify-center gap-x-4 gap-y-2 font-label-caps text-label-caps text-[#8C9A84]/60 uppercase tracking-widest'>
          <a className='hover:text-white transition-colors duration-500 interactive' href='#hero'>
            Hero
          </a>
          <span>·</span>
          <a className='hover:text-white transition-colors duration-500 interactive' href='#about'>
            About
          </a>
          <span>·</span>
          <a
            className='hover:text-white transition-colors duration-500 interactive'
            href='#experience'
          >
            Experience
          </a>
          <span>·</span>
          <a
            className='hover:text-white transition-colors duration-500 interactive'
            href='#projects'
          >
            Projects
          </a>
          <span>·</span>
          <a className='hover:text-white transition-colors duration-500 interactive' href='#skills'>
            Skills
          </a>
          <span>·</span>
          <a
            className='hover:text-white transition-colors duration-500 interactive'
            href='#education'
          >
            Education
          </a>
          <span>·</span>
          <a className='hover:text-white transition-colors duration-500 interactive' href='#awards'>
            Awards
          </a>
          <span>·</span>
          <a
            className='hover:text-white transition-colors duration-500 interactive'
            href='#contact'
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};
