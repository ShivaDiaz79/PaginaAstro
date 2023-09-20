import React from 'react';

function FeatureLink({ text }) {
  return (
    <a>
      <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      {text}
    </a>
  );
}

function FeatureColumn({ title, links }) {
  return (
    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        {title}
      </h2>
      <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
        {links.map((text, index) => (
          <FeatureLink key={index} text={text} />
        ))}
      </nav>
    </div>
  );
}

const FeatureSection = () => {
  const features = [
    {
      title: 'SHOOTING STARS',
      links: ['First Link', 'Second Link', 'Third Link', 'Fourth Link', 'Fifth Link'],
    },
    {
      title: 'THE 400 BLOWS',
      links: ['First Link', 'Second Link', 'Third Link', 'Fourth Link', 'Fifth Link'],
    },
    {
      title: 'THE CATALYZER',
      links: ['First Link', 'Second Link', 'Third Link', 'Fourth Link', 'Fifth Link'],
    },
    {
      title: 'NEPTUNE',
      links: ['First Link', 'Second Link', 'Third Link', 'Fourth Link', 'Fifth Link'],
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Raw Denim Heirloom Man Braid
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
            indxgo juice poutine, ramps microdosing banh mi pug.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <FeatureColumn key={index} {...feature} />
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
