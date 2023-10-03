import Layout from "components/Layout";
import SectionMantenimiento from "./components/SectionMantenimiento";

const index = () => {
  return (
    <Layout>
      <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen ">
        <SectionMantenimiento/>
      </div>
    </Layout>
  );
};

export default index;
