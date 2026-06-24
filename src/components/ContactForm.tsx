import React, { useState } from 'react';
import { motion } from 'framer-motion';

// TODO: Replace this with your copied Google Web App URL after deploying the Apps Script!
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxhVElL_lz02BOM4YEOSt1vYhgijl72yIoZSmDc-9YqgrHYyNlZ3HOBNN9EdWWwYpiX/exec';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Send as URL encoded form data
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('name', formData.fullName);
      urlEncodedData.append('email', formData.email);
      urlEncodedData.append('mobile', formData.mobile);
      urlEncodedData.append('subject', formData.subject);
      urlEncodedData.append('message', formData.message);

      // Google Apps Script redirect requires no-cors for direct browser post
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData.toString()
      });

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });

      // Reset status back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      className='bg-brand-alabaster text-brand-forest p-8 md:p-10 rounded-[32px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-stone-border/20 w-full'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <form onSubmit={handleSubmit} className='space-y-5'>
        {/* Full Name */}
        <div className='flex flex-col'>
          <label
            htmlFor='fullName'
            className='font-label-caps text-[11px] font-semibold text-brand-sage uppercase tracking-[0.15em] mb-2'
          >
            Full Name
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='John Doe'
            className='w-full bg-white border border-stone-border rounded-[16px] px-5 py-4 font-body-md text-[16px] text-brand-forest focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all duration-300 placeholder-brand-forest/30'
            required
          />
        </div>

        {/* Email Address */}
        <div className='flex flex-col'>
          <label
            htmlFor='email'
            className='font-label-caps text-[11px] font-semibold text-brand-sage uppercase tracking-[0.15em] mb-2'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='john@example.com'
            className='w-full bg-white border border-stone-border rounded-[16px] px-5 py-4 font-body-md text-[16px] text-brand-forest focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all duration-300 placeholder-brand-forest/30'
            required
          />
        </div>

        {/* Mobile / Whatsapp Number */}
        <div className='flex flex-col'>
          <label
            htmlFor='mobile'
            className='font-label-caps text-[11px] font-semibold text-brand-sage uppercase tracking-[0.15em] mb-2'
          >
            Mobile / WhatsApp Number
          </label>
          <input
            type='tel'
            id='mobile'
            name='mobile'
            value={formData.mobile}
            onChange={handleChange}
            placeholder='+91 98765 43210'
            className='w-full bg-white border border-stone-border rounded-[16px] px-5 py-4 font-body-md text-[16px] text-brand-forest focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all duration-300 placeholder-brand-forest/30'
          />
        </div>

        {/* Subject */}
        <div className='flex flex-col'>
          <label
            htmlFor='subject'
            className='font-label-caps text-[11px] font-semibold text-brand-sage uppercase tracking-[0.15em] mb-2'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Project Inquiry'
            className='w-full bg-white border border-stone-border rounded-[16px] px-5 py-4 font-body-md text-[16px] text-brand-forest focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all duration-300 placeholder-brand-forest/30'
            required
          />
        </div>

        {/* Message */}
        <div className='flex flex-col'>
          <label
            htmlFor='message'
            className='font-label-caps text-[11px] font-semibold text-brand-sage uppercase tracking-[0.15em] mb-2'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Tell me about your project...'
            rows={4}
            className='w-full bg-white border border-stone-border rounded-[16px] px-5 py-4 font-body-md text-[16px] text-brand-forest focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all duration-300 placeholder-brand-forest/30 resize-none'
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={status === 'submitting'}
          className='w-full bg-brand-forest hover:bg-brand-terra text-white font-label-caps text-[11px] font-semibold px-8 py-5 rounded-full tracking-[0.2em] uppercase transition-colors duration-500 ease-out shadow-soft flex justify-center items-center gap-3 interactive cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed'
        >
          {status === 'submitting' ? (
            <span>Sending...</span>
          ) : (
            <>
              Send Message
              <span className='material-symbols-outlined text-[16px]'>arrow_forward</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            className='bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl p-4 text-center text-sm font-semibold'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ✓ Message sent successfully! I'll get back to you shortly.
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            className='bg-red-50 text-red-800 border border-red-200 rounded-2xl p-4 text-center text-sm font-semibold'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ✗ Something went wrong. Please try again or email me directly.
          </motion.div>
        )}

        <div className='text-[12px] text-brand-sage font-body-md tracking-wide text-center pt-2 flex items-center justify-center gap-1.5 opacity-80'>
          <span>✨</span>
          Yes, this actually works! You will get an email within a minute.
        </div>
      </form>
    </motion.div>
  );
};
