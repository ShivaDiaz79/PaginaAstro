import HeroSection from "components/HeroSection";
import Aplicaciones from "components/Aplicaciones";
import DesarrollloW from "components/DesarrolloW";
import WebMaster from "components/WebMaster";
import Animaciones from "components/Animaciones";
import Others from "components/Others";
import Marketing from "components/Marketing";

import React, { useEffect, useState } from "react";
import Layout from "components/Layout";







const Index = () => {



  return (
    <Layout>
      <main className=" snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <Marketing />
        </div>
        <div className="snap-center">
          <Aplicaciones />
        </div>
        <div className="snap-center">
          <DesarrollloW />
        </div>
        <div className="snap-center">
          <WebMaster />
        </div>
        <div className="snap-center">
          <Animaciones />
        </div>
        <div className="snap-center">
          <Others />
        </div>

        {/* <div>
      <FooterMenu/>
    </div> */}
      </main>
    </Layout>
  );
};

export default Index;
