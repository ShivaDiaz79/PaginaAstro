import React from 'react';

const PricingItem = ({ title, price, description, features }) => {
  return (
    <div className="relative flex flex-col p-8 bg-white">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-neutral-600">{title}</h3>
        <p className="flex items-baseline mt-4 text-neutral-600">
          <span className="text-5xl font-extrabold tracking-tight">{price}</span>
          <span className="ml-1 text-xl font-semibold">/month</span>
        </p>
        <p className="mt-6 text-gray-500">{description}</p>

        <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
          <span className="text-lg font-semibold text-neutral-600">What s included?</span>

          {features.map((feature, index) => (
            <li key={index} className="flex">
              <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                <svg
                  className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 rounded-lg">
        <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">
          Get Started
        </a>
      </div>
    </div>
  );
};

const PriceMarketing = () => {
  const pricingItems = [
    {
      title: 'Freelancer',
      price: '$24',
      description: 'The essentials to provide your best work for clients.',
      features: [
        'Up to 10 credit cards',
        'Up to 1,000 credits',
        'Tacky wallet',
        'Personal profile only',
      ],
    },
    {
      title: 'Startup',
      price: '$32',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        'Up to 10 credit cards',
        'Up to 10,000 credits',
        'Less tacky wallet',
        'Profile and portfolio',
        'Support',
      ],
    },
    {
      title: 'Enterprise',
      price: '$48',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited credit cards',
        'Unlimited credits',
        'A super wallet',
        'Shout out',
        'Better support',
        'Custom integrations',
      ],
    },
  ];

  return (
    <div>
      <section>
        <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div>
            <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
              {pricingItems.map((item, index) => (
                <PricingItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceMarketing;
