import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

export const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col font-body-md antialiased selection:bg-sage selection:text-white'>
      <div className='paper-grain'></div>
      <CustomCursor />

      <Navbar />
      <AnimatePresence mode='wait'>
        <main className='flex-grow w-full relative'>
          <Outlet />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
