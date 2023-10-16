import React from 'react';

const PriceCard = ({ price, discount, title, features, link, bgClass }) => (
  <div className={`relative p-6 ${bgClass}`}>
    <div className="absolute inset-x-0 transform translate-y-px -top-1">
      <div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
        <span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-white border-8 border-blue-600 text-gray-800 rounded-xl">
          Best Value
        </span>
      </div>
    </div>
    <div className="flex flex-col p-4">
      <div className="py-6">
        <h2 className="text-5xl font-thin leading-6 text-white">
          <span className="ml-auto font-extrabold text-white"> {price} </span>
          {discount && (
            <del className="text-3xl font-medium text-white">{discount}</del>
          )}
        </h2>
        <p className="mt-6 text-xl font-semibold text-white">{title}</p>
        {features && (
          <ul className="mt-2 space-y-2 text-base text-white">
            {features.map((feature, index) => (
              <li key={index} className="flex space-x-3">
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <a
        href={link}
        className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
      >
        Buy for {price}
      </a>
    </div>
  </div>
);

const PriceDiseño = () => {
  const priceCards = [
    {
      price: '$107',
      discount: '$179',
      title: 'Teams',
      features: [
        '15 Templates + releases',
        'UI Kits',
        'HTML & Next.js',
        'Figma files',
        'Flexible license',
        'Priority Support',
      ],
      link: 'https://wicked-templates.gumroad.com/l/wicked-team-tier/40dark',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
    {
      price: '$53',
      discount: '$89',
      title: 'Freelancer',
      features: [
        '14 Templates + releases',
        'HTML & Next.js',
        'Figma files',
        'Flexible license',
      ],
      link: 'https://wicked-templates.gumroad.com/l/wicked-dev-tier/40dark',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
    {
      price: '$29',
      discount: '$49',
      title: 'Hobby',
      features: [
        '14 Templates + releases',
        'HTML & Next.js',
        'Flexible license',
      ],
      link: 'https://wicked-templates.gumroad.com/l/starter-tier/40dark',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
  ];

  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:grid-cols-3">
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceDiseño;

