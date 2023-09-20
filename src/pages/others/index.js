import Layout from "../../../components/Layout";
import PriceOthers from "./components/PriceOthers";
import UxSection from "./components/UxSection";
import ChatbotSection from "./components/ChatbotSection";
import PriceContenido from "./components/PriceContenido";
import FeatureSection from "./components/FeatureSection";

const index = () => {
  return (
    <Layout>
      <main>
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen pt-40 ps-3">
          <UxSection />x
          <PriceOthers />
          <ChatbotSection />
          <FeatureSection/>
          <PriceContenido/>
        </div>





      </main>
    </Layout>
  );
};

export default index;
