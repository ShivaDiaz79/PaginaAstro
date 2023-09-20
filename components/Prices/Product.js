// Product.js
import React from 'react';
import PriceCard from './PriceCard';

const Product = ({ title, description, priceData }) => (
  <div>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">{description}</p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {priceData.map((price, index) => (
            <PriceCard key={index} {...price} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Product;
