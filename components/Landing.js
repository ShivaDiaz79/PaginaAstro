import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';

// Definición de la variante slideUp
export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className="relative flex h-screen overflow-hidden"
    >
      <Image
        src="https://res.cloudinary.com/di1v23yy0/image/upload/v1689032618/o_knhvvr.jpg"
        layout="fill"
        alt="background"
      />

      <div className="absolute bottom-[-350px] sliderContainer">
        <div ref={slider} className="relative whitespace-nowrap slider">
          <p ref={firstText} className="relative text-white text-6xl font-semibold pr-16">
            Freelance Developer -
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 text-white text-6xl font-semibold pr-16"
          >
            Freelance Developer -
          </p>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="0.1"
        className="absolute top-1/3 left-2/3 text-white text-3xl font-light"
      >
        
    
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
    </motion.main>
  );
}
