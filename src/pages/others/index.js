import Layout from "../../../components/Layout";
import PriceOthers from "./components/PriceOthers";
import UxSection from "./components/UxSection";
import PriceContenido from "./components/PriceContenido";
import FeatureSection from "./components/FeatureSection";
import InfoSection from "./components/InfoSection";


const index = () => {
  return (
    <Layout>
      <main>
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen pt-40 ps-3">
          <UxSection />

          <PriceOthers />
          <FeatureSection />
          <InfoSection />

          <PriceContenido />
      
        </div>
      </main>
    </Layout>
  );
};

export default index;
