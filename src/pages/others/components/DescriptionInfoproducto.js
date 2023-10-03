

import React from 'react';

// Componente que representa un solo elemento de la sección
function SectionItem({ category, date, title, description }) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700">{category}</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
        <p className="leading-relaxed">{description}</p>
        <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

// Componente principal de la sección
function DescriptionInfoproducto() {
  const sectionData = [
    {
      category: 'CATEGORY',
      date: '12 Jun 2019',
      title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
      description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    },
    {
      category: 'CATEGORY',
      date: '12 Jun 2019',
      title: 'Meditation bushwick direct trade taxidermy shaman',
      description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    },
    {
      category: 'CATEGORY',
      date: '12 Jun 2019',
      title: 'Woke master cleanse drinking vinegar salvia',
      description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {sectionData.map((item, index) => (
            <SectionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DescriptionInfoproducto
