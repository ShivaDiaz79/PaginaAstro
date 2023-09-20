import React from 'react';
import Image from 'next/image';
import GridHerosection from '../Grid/GridHerosection';
import GridAplicaciones from 'components/Grid/GridAplicaciones';
import GridMarketing from 'components/Grid/GridMarketing';
import GridMaster from 'components/Grid/GridMaster';
import GridAnimations from 'components/Grid/GridAnimations';
import GridOthers from 'components/Grid/GridOthers';
import GridWeb from 'components/Grid/GridWeb';


const Section = ({ color, title, subtitle, id, showFooterContent, videoSrc, imageSrc, alt, height, width }) => {
  const textColor = `text-${color}`;

  const renderGrid = () => {
    switch (id) {
      case "herosection":
        return <GridHerosection/>;
      case "website":
        return <GridWeb />;
      case "marketing":
        return <GridMarketing />;
      case "others":
        return <GridOthers/>;
      case "aplicaciones":
        return <GridAplicaciones />;
      case "webmaster":
        return <GridMaster />;
      case "animaciones":
        return <GridAnimations/>;

       
      default:
        return null; // En caso de que el ID no coincida con ninguna sección conocida
    }
  };

  return (
    <main
      className={`landing-section min-h-screen w-screen text-center overflow-hidden relative pb-20 `}
      data-header-color={color}
      id={id}
    >
      <div className="z-30 relative h-full flex flex-col">
        <header className=''>
          <h2 className={`${textColor} pt-28 text-[40px] font-medium  `}>
            {title}
          </h2>
          <p className={`${textColor} text-sm pb-10`}> 
            {subtitle}
          </p>
          {/* hidden sm:block */}
        </header>
        <header className=''>
        {renderGrid()}
        </header>
       
        {/* <footer className="flex flex-col flex-grow justify-end pb-20">
          {showFooterContent && <FooterMenu />}
        </footer> */}
     
      </div>

      {videoSrc && (
        <div className="absolute top-0 bottom-0 h-full w-full z-10">
          <video controls autoPlay muted loop className="h-full w-full object-cover object-center">
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      )}

      {imageSrc && (
        <div className="absolute top-0 bottom-0 h-full w-full z-10">
          <Image
            src={imageSrc}
            alt={alt}
            height={height}
            width={width}
            className="h-full w-full object-cover object-center"
          />
      
        </div>
      )}
       {/* Renderiza el componente Grid correspondiente */}
     
    </main>
  );
};

export default Section;



