import Layout from "components/Layout";
import React from "react";
import SocialMedia from "./componets/SocialMedia";
import PriceMarketing from "./componets/PriceMarketing";
import SectionCampaña from "./componets/SectionCampaña";
import SectionDiseño from "./componets/SectionDiseño";
import SectionRedes from "./componets/SectionRedes";
import CenteredImageWithText from "./componets/CenteredImageWithText";
import PriceDiseño from "./componets/PriceDiseño";
import PriceCampaña from "./componets/PriceCampaña";
import FeatureSection from "./componets/FeactureSection";

const index = () => {
  return (
    <Layout>
      <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen ">
        <SectionDiseño/>
        <PriceMarketing/>
        <SectionRedes />
        <SectionCampaña/>     
        <PriceDiseño/>
        <CenteredImageWithText/>
        <FeatureSection/>
        <PriceCampaña/>
      </div>
    </Layout>
  );
};

export default index;
