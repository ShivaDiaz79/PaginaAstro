import React, { useState, useEffect } from "react";

const CursorImage = () => {
  const images = ["d.jpg", "e.jpg", "f.jpg"]; // Agrega más imágenes aquí
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setIsMoving(true);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMoving) {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
      }
    }, 200); // Cambia la velocidad de desplazamiento aquí

    return () => clearInterval(interval);
  }, [isMoving]);

  return (
    <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      {isMoving && <img src={`/Img/${currentImage}`} alt="Cursor" />}
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 9999;
        }

        .custom-cursor img {
          width: 3cm; /* Cambia el tamaño según tus necesidades */
          animation: snakeEffect 2s infinite linear; /* Agrega la animación */
        }

        @keyframes snakeEffect {
          0% {
            opacity: 0;
            transform: translate(-20px, -20px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        @media (max-width: 768px) {
          /* Cambia el tamaño para dispositivos móviles */
          .custom-cursor img {
            width: 1cm;
          }
        }
      `}</style>
    </div>
  );
};

export default CursorImage;

