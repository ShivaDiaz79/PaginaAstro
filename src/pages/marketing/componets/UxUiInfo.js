import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const UxUiInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    const infoContainer = document.querySelector('.info-container');

    gsap.to(infoContainer, {
      opacity: showInfo ? 1 : 0,
      height: showInfo ? 'auto' : 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [showInfo]);

  const renderParagraph = (text) => <p>{text}</p>;

  const renderListItem = (text) => <li>{text}</li>;

  return (
    <div className='pt-5'>
      <h2>¿Quieres saber más de UX/UI? Haz clic aquí</h2>
      <button className='text-center mt-4 ms-16' onClick={toggleInfo}>
        {showInfo ? 'Ocultar información' : 'Mostrar información'}
      </button>

      <div className={`info-container ${showInfo ? 'show' : ' bg-slate-400'}`}>
        <h3>UX (User Experience - Experiencia de Usuario):</h3>
        {renderParagraph(
          'La Experiencia de Usuario (UX) se refiere a la experiencia global que un usuario tiene al interactuar con un producto o servicio, como un sitio web, una aplicación móvil o incluso un producto físico. El objetivo principal de la UX es crear un diseño que sea intuitivo, eficiente y que satisfaga las necesidades y expectativas del usuario de manera positiva.'
        )}
        {renderParagraph('Aspectos clave de la UX incluyen:')}
        <ul>
          {[
            'Investigación del usuario: Comprender las necesidades, comportamientos y deseos de los usuarios a través de investigaciones, encuestas y análisis de datos.',
            'Arquitectura de la información: Organizar y estructurar la información de manera lógica y fácilmente accesible para los usuarios.',
            'Diseño de interacción: Crear flujos de trabajo y sistemas de navegación que permitan a los usuarios realizar tareas de manera eficiente y sin problemas.',
            'Diseño de usabilidad: Garantizar que la interfaz sea fácil de usar, evitando confusiones y errores.',
            'Testeo de usuario: Probar el diseño con usuarios reales para identificar problemas y realizar mejoras.',
          ].map((item, index) => (
            <React.Fragment key={index}>{renderListItem(item)}</React.Fragment>
          ))}
        </ul>

        {renderParagraph(
          'En resumen, UX se trata de diseñar una experiencia completa y satisfactoria para el usuario, desde el primer contacto con un producto o servicio hasta su uso continuo.'
        )}

        <h3>UI (User Interface - Interfaz de Usuario):</h3>
        {renderParagraph(
          'La Interfaz de Usuario (UI) se refiere a los elementos visuales y funcionales con los que un usuario interactúa en un producto o servicio digital, como botones, iconos, menús y elementos de diseño en una aplicación o sitio web. El objetivo principal de la UI es crear una interfaz atractiva, fácil de usar y que comunique claramente la funcionalidad del producto.'
        )}
        {renderParagraph('Aspectos clave de la UI incluyen:')}
        <ul>
          {[
            'Diseño visual: Crear una apariencia visual atractiva que refleje la marca y sea agradable a la vista.',
            'Diseño de interacción: Diseñar la forma en que los elementos responden a las acciones del usuario, como animaciones, transiciones y retroalimentación visual.',
            'Consistencia: Mantener una apariencia y un comportamiento coherente en toda la interfaz para evitar confusiones.',
            'Accesibilidad: Asegurarse de que la interfaz sea usable por personas con discapacidades, como la incorporación de etiquetas alt en imágenes o la elección de colores accesibles.',
            'Responsividad: Diseñar la interfaz para que se adapte a diferentes tamaños de pantalla y dispositivos, garantizando una experiencia uniforme en todas las plataformas.',
          ].map((item, index) => (
            <React.Fragment key={index}>{renderListItem(item)}</React.Fragment>
          ))}
        </ul>

        {renderParagraph(
          'En resumen, UI se centra en el aspecto y la interacción visual de un producto digital, asegurándose de que sea atractivo, fácil de usar y efectivo para los usuarios. UX y UI trabajan juntas para crear experiencias de usuario excepcionales y son fundamentales en el diseño de productos y servicios digitales exitosos.'
        )}
      </div>

      <style jsx>{`
        .info-container {
          background-color:  #C0C0C0;
          border-radius: 12px;
          padding: 20px;
          margin-top: 20px;
          opacity: 0;
          height: 0;
          overflow: hidden;
          transition: opacity 0.5s, height 0.5s;
        }

        button {
          background-color: #0078d4;
          color: #ffffff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #005a9e;
        }

        .show {
          opacity: 1;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default UxUiInfo;

