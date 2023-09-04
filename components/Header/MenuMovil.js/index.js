import { useEffect } from 'react';

const MenuMovil = () => {
  useEffect(() => {
    const menuLinks = document.querySelectorAll("#mobile-menu a");
    const sections = document.querySelectorAll(".landing-section");

    function getSectionColor(sectionId) {
      const sectionElement = document.querySelector(sectionId);
      return sectionElement.getAttribute("data-header-color");
    }

    function changeMenuColorAndTabs(sectionId) {
      const color = getSectionColor(sectionId);
      menuLinks.forEach(menuLink => {
        menuLink.style.color = color;
      });
    }

    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top <= scrollPosition && sectionRect.bottom >= scrollPosition) {
          const sectionId = `#${section.getAttribute("id")}`;
          changeMenuColorAndTabs(sectionId);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="mobile-menu"
      className="hidden xl:hidden sm:block absolute top-24 bg-transparent text-white p-4 rounded shadow"
    >
      <ul className="flex flex-col space-y-2">
        <li><a href="#aplicaciones">Aplicaciones</a></li>
        <li><a href="#website">Web Site</a></li>
        <li><a href="#webmaster">Web Master</a></li>
        <li><a href="#marketing">Marketing</a></li>
        <li><a href="#others">Others</a></li>
        <li><a href="#animaciones">Animaciones - 3D</a></li>
      </ul>
    </nav>
  );
};

export default MenuMovil;
