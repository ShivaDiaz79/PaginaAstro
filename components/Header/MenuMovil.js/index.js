import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuMovil = () => {
  const router = useRouter(); // Obtén el router de Next.js
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
    className="hidden xl:hidden lg:hidden font-oswald absolute text-xl top-24 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white p-4 rounded shadow"
  >
    <ul className="flex flex-col space-y-2 font-oswald ">
      {/* Verifica si estás en la página principal o en otra página */}
      {router.asPath === '/' ? ( // Si estás en la página principal
        <>
          <li><a href="#aplicaciones">Aplicaciones</a></li>
          <li><a href="#website">Web Site</a></li>
          <li><a href="#webmaster">Web Master</a></li>
          <li><a href="#marketing">Marketing</a></li>
          <li><a href="#others">Others</a></li>
          <li><a href="#animaciones">Animaciones - 3D</a></li>
          <li className=""><Link href="/cotiza">Cotiza</Link></li>
          <li className=""><Link href="/contacto">Contacto</Link></li>
        </>
      ) : ( // Si estás en otra página
        <>
          <li><Link href="aplicaciones">Aplicaciones</Link></li>
          <li><Link href="webSite">Web Site</Link></li>
          <li><Link href="webMaster">Web Master</Link></li>
          <li><Link href="marketing">Marketing</Link></li>
          <li><Link href="others">Others</Link></li>
          <li><Link href="animaciones">Animaciones - 3D</Link></li>
          <li className=""><Link href="/cotiza">Cotiza</Link></li>
          <li className=""><Link href="/contacto">Contacto</Link></li>
        </>
      )}
    </ul>
  </nav>
  );
};

export default MenuMovil;
