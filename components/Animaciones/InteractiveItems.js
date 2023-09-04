import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

function InteractiveItems() {
  const itemsRef = useRef([]);
  const detailsRef = useRef(null);

  useEffect(() => {
    itemsRef.current = gsap.utils.toArray('.item');

    function showDetails(item) {
      if (activeItem) {
        hideDetails();
      }

      const data = item.dataset;
      const detailContent = detailsRef.current;
      const detailImage = detailContent.querySelector('.detail-image');
      const detailTitle = detailContent.querySelector('.title');
      const detailSecondary = detailContent.querySelector('.secondary');
      const detailDescription = detailContent.querySelector('.description');

      detailImage.src = item.querySelector('img').src;
      detailTitle.innerText = data.title;
      detailSecondary.innerText = data.secondary;
      detailDescription.innerText = data.text;

      const tl = gsap.timeline();
      tl.to(item, { opacity: 0.3, duration: 0.5 })
        .to('.app', { backgroundColor: '#888', duration: 1 }, '<')
        .to(detailContent, { yPercent: 0, duration: 0.5 }, '<');

      activeItem = item;

      document.addEventListener('click', hideDetails);
    }

    function hideDetails() {
      document.removeEventListener('click', hideDetails);

      const detailContent = detailsRef.current;
      gsap.to(detailContent, { yPercent: -100, duration: 0.5 });

      gsap.to('.item', { opacity: 1, duration: 0.5 });
      gsap.to('.app', { backgroundColor: '#fff', duration: 1 });

      activeItem = null;
    }

    itemsRef.current.forEach((item) => {
      item.addEventListener('click', () => showDetails(item));
    });

    gsap.to('.app', { autoAlpha: 1, duration: 0 });
    gsap.from('.item', { autoAlpha: 1, yPercent: 0, stagger: 0.04 });

    let activeItem = null;

    return () => {
      itemsRef.current.forEach((item) => {
        item.removeEventListener('click', () => showDetails(item));
      });
    };
  }, []);

  return (
    <div className="app">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 p-10">
        <div className="item bg-gray-300 p-4" data-title="Item 1" data-secondary="Secondary 1" data-text="Description 1">
          <Image src="/Img/e.jpg" alt="Item 1" width={200} height={200} />
        </div>
        <div className="item bg-gray-300 p-4" data-title="Item 2" data-secondary="Secondary 2" data-text="Description 2">
          <Image src="/Img/d.jpg" alt="Item 2" width={200} height={200} />
        </div>
        <div className="item bg-gray-300 p-4" data-title="Item 3" data-secondary="Secondary 3" data-text="Description 3">
          <Image src="/Img/f.jpg" alt="Item 3" width={200} height={200} />
        </div>
        {/* Add more items as needed */}
      </div>
      <div className="detail" ref={detailsRef} style={{ visibility: 'hidden' }}>
        <div className="content">
          <img className="detail-image" alt="Detail" width={600} height={600} />
          <h1 className="title"></h1>
          <h2 className="secondary"></h2>
          <p className="description"></p>
        </div>
      </div>
    </div>
  );
}

export default InteractiveItems;


