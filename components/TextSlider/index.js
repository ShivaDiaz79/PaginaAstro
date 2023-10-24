import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/all';

export default function TextSlider() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const texts = [
    'APLICACIONES',
    'NATIVAS',
    'HIBRIDAS',
    // Agrega más textos aquí
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 'top ',
        end: 'bottom top',
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: '-200px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
      changeText();
    } else if (xPercent > 0) {
      xPercent = -100;
      changeText();
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const changeText = () => {
    setCurrentTextIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" top-[calc(100vh-350px)]">
      <div ref={slider} className="relative whitespace-nowrap">
        <p
          ref={firstText}
          className="relative text-14xl font-semibold pr-16 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        >
          {texts[currentTextIndex]}
        </p>
        <p
          ref={secondText}
          className="absolute left-full top-0 text-14xl font-semibold pr-16 bg-clip-text text-white"
        >
          {texts[currentTextIndex]}
        </p>
      </div>
    </div>
  );
}
