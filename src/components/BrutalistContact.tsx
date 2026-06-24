import React, { useState } from 'react';

const BrutalistContact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic to handle submission
  };

  return (
    <div
      className='min-h-screen bg-[#e8e8e8] flex justify-center items-center p-8 relative overflow-hidden'
      style={{
        backgroundImage: 'radial-gradient(#d1d1d1 2px, transparent 2px)',
        backgroundSize: '24px 24px'
      }}
    >
      {/* Main Form Container */}
      <div className='bg-[#ff726f] border-[4px] border-black p-8 md:p-12 w-full max-w-2xl relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {/* Full Name */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='fullName' className='font-bold text-black uppercase tracking-wide'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              placeholder='JOHN DOE'
              className='w-full bg-[#fcfcfc] border-[3px] border-black p-4 text-black font-bold uppercase placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white transition-colors'
              required
            />
          </div>

          {/* Email Address */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='font-bold text-black uppercase tracking-wide'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='JOHN@EXAMPLE.COM'
              className='w-full bg-[#fcfcfc] border-[3px] border-black p-4 text-black font-bold uppercase placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white transition-colors'
              required
            />
          </div>

          {/* Mobile / Whatsapp Number */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='mobile' className='font-bold text-black uppercase tracking-wide'>
              Mobile / Whatsapp Number
            </label>
            <input
              type='tel'
              id='mobile'
              name='mobile'
              value={formData.mobile}
              onChange={handleChange}
              placeholder='+91 98765 43210'
              className='w-full bg-[#fcfcfc] border-[3px] border-black p-4 text-black font-bold uppercase placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white transition-colors'
            />
          </div>

          {/* Subject */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='subject' className='font-bold text-black uppercase tracking-wide'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='PROJECT INQUIRY'
              className='w-full bg-[#fcfcfc] border-[3px] border-black p-4 text-black font-bold uppercase placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white transition-colors'
              required
            />
          </div>

          {/* Message */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='message' className='font-bold text-black uppercase tracking-wide'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='TELL ME ABOUT YOUR PROJECT...'
              rows={4}
              className='w-full bg-[#fcfcfc] border-[3px] border-black p-4 text-black font-bold uppercase placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white transition-colors resize-none'
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='mt-4 w-full bg-[#ffd700] hover:bg-[#ffe234] text-black border-[3px] border-black p-4 font-bold uppercase tracking-widest flex justify-center items-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] transition-all duration-100'
          >
            Send Message
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={3}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </button>

          {/* Footer note */}
          <div className='mt-2 bg-[#ff8c8a] border-2 border-[#ff9e9c] p-3 text-center text-black/80 font-bold uppercase text-xs sm:text-sm tracking-wide flex justify-center items-center gap-2'>
            <span className='text-[#ffd700]'>⚡</span>
            Yes, this actually works! You will get an email within a minute.
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrutalistContact;
