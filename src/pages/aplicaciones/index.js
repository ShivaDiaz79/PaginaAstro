import Layout from "components/Layout";
import React from "react";
import SectionApps from "./components/SectionApps";
import SectionMcolors from "./components/SectionMcolors";
import SectionIphone from "./components/SectionIphone";
import PriceMcolors from "./components/PriceMcolors";




const Index = () => {
  return (
    <Layout>
      <div className=" overflow-hidden sticky top-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen ">
        <SectionApps />
         <SectionMcolors />
        <SectionIphone />
        <PriceMcolors />
      </div>
    </Layout>
  );
};

export default Index;
