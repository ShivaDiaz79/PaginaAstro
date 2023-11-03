import Layout from "../../../components/Layout";
import UxSection from "./components/UxSection";
import FeatureSection from "./components/FeatureSection";
import InfoSection from "./components/InfoSection";

const index = () => {
  return (
    <Layout>
      <main>
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen pt-40 ps-3">
          <UxSection/>
          <FeatureSection/>
          <InfoSection/>
        </div>
      </main>
    </Layout>
  );
};

export default index;
