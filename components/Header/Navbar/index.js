import { useEffect } from 'react';
import Image from 'next/image.js';
import MenuMovil from '../MenuMovil.js';
import Link from 'next/link.js';

const Navbar = () => {
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

  useEffect(() => {
    const listItem = document.querySelectorAll("#landing-header li");
    const menuBackDrop = document.querySelector("#menu-backdrop");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        menuBackDrop.style.setProperty("--left", `${left}px`);
        menuBackDrop.style.setProperty("--top", `${top}px`);
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`);

        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      });
    });

    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }, []);

  useEffect(() => {
    const headerEl = document.querySelector("#landing-header");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          headerEl.style.color = color;
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll(".landing-section");
    sectionElements.forEach((section) => observer.observe(section));
  }, []);

  return (
    <header id="landing-header" className=" py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white">
      <div className="flex flex-grow basis-0">
        <Link href='/'>
          <Image src="/Img/blancowhite.png" alt="Logo"  width="100"  height="100" className="rounded-lg bg-gray-500 opacity-50 h-16 w-32" />
        </Link>
      </div>

      <nav className="hidden xl:block sm:hidden">
        <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li><Link href="#aplicaciones">Aplicaciones</Link></li>
          <li><Link href="#website">Web Site</Link></li>
          <li><Link href="#webmaster">Web Master</Link></li>
          <li><Link href="#marketing">Marketing</Link></li>
          <li><Link href="#others">Others</Link></li>
          <li><Link href="#animaciones">Animaciones - 3D</Link></li>
        </ul>
      </nav>

      <nav className="flex flex-grow justify-end basis-0">
        <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li className="hidden xl:block sm:hidden"><Link href="cotiza">Cotiza</Link></li>
          <li className="hidden xl:block sm:hidden"><Link href="contacto">Contacto</Link></li>
          <li className="sm:hidden border border-emerald-50 z-50"><Link href="#" id="mobile-menu-toggle">Menú</Link></li>
        </ul>
      </nav>

      <MenuMovil/>

      <div
        id="menu-backdrop"
        className={`
          absolute bg-black/5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] backdrop-blur-lg rounded
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-[var(--height)]
          transition-all duration-500
          ease-in-out opacity-0 -z-10
        `}
      ></div>
    </header>
  );
};

export default Navbar;



