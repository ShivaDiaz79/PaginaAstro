import Layout from "components/Layout";
import React from "react";
import SocialMedia from "./componets/SocialMedia";
import PriceMarketing from "./componets/PriceMarketing";
import SectionCampaña from "./componets/SectionCampaña";
import SectionDiseño from "./componets/SectionDiseño";
import SectionRedes from "./componets/SectionRedes";
import CenteredImageWithText from "./componets/CenteredImageWithText";

const index = () => {
  return (
    <Layout>
      <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen ">
        <SectionDiseño />

        <PriceMarketing />
        <SectionCampaña />
        <SectionRedes />
        <CenteredImageWithText />

      </div>
    </Layout>
  );
};

export default index;
