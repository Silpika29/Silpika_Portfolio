import { useEffect, useState, useRef } from 'react';

const frameModules = import.meta.glob('../assets/ezgif-78f5a6b631e58f22-jpg/*.jpg', {
  eager: true,
  import: 'default'
});
const frameUrls = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key] as string);

const FLOATING_MESSAGES = [
  "Hi, I'm Silpika.",
  'I am a hardworking and enthusiastic undergraduate student.',
  'Welcome to my portfolio.'
];

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (frameUrls.length === 0) return;

    // Load first frame immediately as poster
    const firstImg = new Image();
    firstImg.onload = () => {
      const canvas = canvasRef.current;
      if (canvas && !imagesLoaded) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = firstImg.width;
          canvas.height = firstImg.height;
          ctx.drawImage(firstImg, 0, 0);
        }
      }
    };
    firstImg.src = frameUrls[0];

    // Preload all frames into memory
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameUrls.length) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
      imgs[index] = img;
    });

    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    if (!imagesLoaded || frameUrls.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameIndex = 0;
    let lastTime = performance.now();
    let animationFrameId: number;
    const fpsInterval = 40; // ~25fps

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      const elapsed = time - lastTime;

      if (elapsed >= fpsInterval) {
        lastTime = time - (elapsed % fpsInterval);

        const img = imagesRef.current[frameIndex];
        if (img) {
          if (canvas.width !== img.width || canvas.height !== img.height) {
            canvas.width = img.width;
            canvas.height = img.height;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        }

        frameIndex = (frameIndex + 1) % imagesRef.current.length;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationFrameId);
  }, [imagesLoaded]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % FLOATING_MESSAGES.length);
    }, 3500);
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div
      id='hero'
      className='min-h-screen w-full flex flex-col md:flex-row items-center justify-center relative px-container-padding pt-24 pb-32 max-w-screen-2xl mx-auto overflow-hidden'
    >
      {/* Left Column (55%) */}
      <div className='w-full md:w-[55%] flex flex-col justify-center z-10 relative mt-16 md:mt-0 md:pr-10'>
        <div
          className={`fade-up-enter flex items-center gap-3 mb-10 ${mounted ? 'fade-up-enter-active' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className='h-3 w-3 rounded-full bg-[#99A692]'></div>
          <span className='font-label-caps text-[11px] font-semibold text-forest uppercase tracking-[0.2em]'>
            AVAILABLE FOR INTERNSHIPS
          </span>
        </div>

        <h1 className='flex flex-col mb-8 relative'>
          <span
            className={`font-display-2xl text-[80px] md:text-[130px] leading-[0.9] text-forest fade-up-enter ${mounted ? 'fade-up-enter-active' : ''}`}
            style={{ transitionDelay: '180ms' }}
          >
            Silpika
          </span>
          <span
            className={`font-display-2xl text-[80px] md:text-[130px] leading-[0.9] text-[#8C9A84] fade-up-enter ${mounted ? 'fade-up-enter-active' : ''}`}
            style={{
              transitionDelay: '260ms',
              transform: mounted ? 'translateX(5%)' : 'translate(5%, 30px)'
            }}
          >
            <span className='not-italic'>J</span>
            <span className='italic'>attimyni</span>
          </span>
        </h1>

        <p
          className={`font-body-lg text-[20px] md:text-[22px] text-forest/70 max-w-lg mb-8 fade-up-enter ${mounted ? 'fade-up-enter-active' : ''}`}
          style={{ transitionDelay: '340ms', lineHeight: '1.6' }}
        >
          AI/ML Engineer · ISRO Research Intern · Building Intelligent Systems
        </p>

        <div
          className={`flex items-center gap-3 mb-12 fade-up-enter ${mounted ? 'fade-up-enter-active' : ''}`}
          style={{ transitionDelay: '420ms' }}
        >
          <span
            className='material-symbols-outlined text-[#8C9A84] text-[24px]'
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            location_on
          </span>
          <span className='font-body-md text-[16px] text-forest/80'>
            Tirupati, Andhra Pradesh, India
          </span>
        </div>

        <div
          className={`flex flex-wrap gap-4 fade-up-enter ${mounted ? 'fade-up-enter-active' : ''}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href='#projects'
            className='bg-forest text-white font-label-caps text-[11px] font-semibold px-8 py-4 rounded-full tracking-[0.2em] uppercase hover:bg-terracotta transition-colors duration-700 ease-out interactive shadow-soft text-center inline-block'
          >
            VIEW MY WORK
          </a>
          <a
            href='#'
            className='bg-transparent border border-[#D5D2C9] text-forest font-label-caps text-[11px] font-semibold px-8 py-4 rounded-full tracking-[0.2em] uppercase hover:border-forest transition-colors duration-700 ease-out interactive text-center inline-block'
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* Right Column (45%) */}
      <div className='w-full md:w-[45%] h-[600px] md:h-[800px] flex items-center justify-end relative mt-16 md:mt-0'>
        {/* Soft Clay Arch */}
        <div
          className={`scale-in-enter w-[95%] md:w-full max-w-[650px] h-[550px] md:h-[750px] bg-[#EFEDE6] rounded-t-full rounded-b-[60px] relative flex items-center justify-center md:translate-x-12 ${mounted ? 'scale-in-enter-active' : ''}`}
        >
          {/* Image Container with precise rounding */}
          <div className='absolute inset-0 w-full h-full rounded-t-full rounded-b-[60px] overflow-hidden pointer-events-none'>
            <canvas ref={canvasRef} className='w-full h-full object-cover object-top' />
          </div>

          {/* SVG Rings */}
          <svg
            className='absolute inset-0 w-full h-full opacity-40 pointer-events-none'
            viewBox='0 0 650 750'
            preserveAspectRatio='xMidYMid slice'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              className='animate-spin-slow'
              cx='325'
              cy='375'
              fill='none'
              r='180'
              stroke='#8C9A84'
              strokeDasharray='6 12'
              strokeWidth='1'
            ></circle>
            <circle
              className='animate-spin-slow-reverse'
              cx='325'
              cy='375'
              fill='none'
              r='240'
              stroke='#8C9A84'
              strokeDasharray='8 16'
              strokeWidth='1.5'
            ></circle>
            <circle
              className='animate-spin-slow'
              cx='325'
              cy='375'
              fill='none'
              r='300'
              stroke='#8C9A84'
              strokeDasharray='4 16'
              strokeWidth='0.5'
              style={{ animationDuration: '20s' }}
            ></circle>
          </svg>

          {/* Floating Cards */}
          <div className='absolute inset-0 w-full h-full'>
            {/* Message Card */}
            <div
              className='absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-4 md:px-10 md:py-5 rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] animate-float interactive w-[90%] md:w-max max-w-[450px] text-center z-10 border border-white/40'
              style={{ animationDelay: '0.8s' }}
            >
              <div className='grid place-items-center'>
                {FLOATING_MESSAGES.map((msg, idx) => (
                  <p
                    key={idx}
                    className={`col-start-1 row-start-1 w-full font-emphasis text-[18px] md:text-[24px] leading-snug text-forest transition-all duration-400 ease-in-out ${
                      currentMessageIndex === idx
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                    }`}
                  >
                    {msg}
                  </p>
                ))}
              </div>
            </div>

            <div
              className='absolute top-[30%] -left-4 md:-left-12 bg-white px-8 py-6 rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] animate-float interactive'
              style={{ animationDelay: '0s' }}
            >
              <p className='font-label-caps text-[10px] text-[#8C9A84] font-semibold tracking-[0.15em] mb-3 uppercase'>
                Education
              </p>
              <p className='font-emphasis text-[32px] text-forest leading-none mb-1'>8.8 CGPA</p>
              <p className='font-body-md text-[14px] text-forest/70'>B.Tech AI/ML</p>
            </div>

            <div
              className='absolute bottom-[25%] right-0 md:right-8 bg-white px-8 py-6 rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] animate-float interactive'
              style={{ animationDelay: '1.5s' }}
            >
              <p className='font-label-caps text-[10px] text-[#C27B66] font-semibold tracking-[0.15em] mb-3 uppercase'>
                Experience
              </p>
              <p className='font-emphasis text-[32px] text-forest leading-none mb-1'>ISRO</p>
              <p className='font-body-md text-[14px] text-forest/70'>Research Intern</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
