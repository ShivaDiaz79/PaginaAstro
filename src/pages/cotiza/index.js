import React from "react";
import Calculator from "./components/Calculator";
import Layout from "../../../components/Layout";
import Gallery from "./components/Galerys";

const index = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <Gallery/>
        <Calculator/>
      </div>
    </Layout>
  );
};

export default index;
