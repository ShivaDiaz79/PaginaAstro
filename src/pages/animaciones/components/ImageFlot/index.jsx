"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";
import Image from "next/image";

const floating1 = "/images/floating_1.jpg";
const floating2 = "/images/floating_2.jpg";
const floating3 = "/images/floating_3.jpg";
const floating4 = "/images/floating_4.jpg";
const floating5 = "/images/floating_5.jpg";
const floating6 = "/images/floating_6.jpg";
const floating7 = "/images/floating_7.jpg";
const floating8 = "/images/floating_8.jpg";

export default function Home() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <main
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={`${styles.main} bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 `}
    >
      <div ref={plane1} className={styles.plane}>
        <Image src={floating1} alt="image" width={300} height={700} />
        <Image src={floating2} alt="image" width={300} height={700} />
        <Image src={floating7} alt="image" width={225} height={700} />
      </div>
      <div ref={plane2} className={styles.plane}>
        <Image src={floating4} alt="image" width={250} height={700} />
        <Image src={floating6} alt="image" width={200} height={700} />
        <Image src={floating8} alt="image" width={225} height={700} />
      </div>
      <div ref={plane3} className={styles.plane}>
        <Image src={floating3} alt="image" width={150} height={700} />
        <Image src={floating5} alt="image" width={200} height={700} />
      </div>
      <div className={styles.title}>
        <h1></h1>
        <p className="text-white text-base">
          Las animaciones en tu sitio web no solo aportan un toque de estilo,
          sino que también son herramientas poderosas para cautivar a tus
          visitantes. Transforma la experiencia de navegación estática en algo
          dinámico e inmersivo. Desde sutiles transiciones hasta llamativas
          animaciones, estas características comunican profesionalismo y guían a
          los usuarios de manera intuitiva, generando un mayor compromiso,
          tiempos de permanencia más largos y tasas de conversión más altas.
          Descubre cómo las animaciones pueden hacer que tu sitio web destaque
          en el mundo digital.
        </p>
      </div>
    </main>
  );
}
