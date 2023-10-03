import Link from "next/link";

const GridItem = ({ href, imageSrc, title, isSecond }) => (
  <Link href={href}>
    <div
      className={`h-40 w-40 sm:h-96 sm:w-96  font-oswald rounded-full bg-gray-100 hover:animate-background bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-150 relative ${
        isSecond ? "mx-auto" : "sm:mx-0"
      }`}
    >
      <img
        className="object-cover w-full rounded-full h-40 w-40 sm:h-96 sm:w-96 sm:rounded-full sm:rounded-full"
        src={imageSrc}
        alt=""
      />
      <h2 className="text-center font-oswald sm:text-2xl absolute inset-0 flex items-center justify-center text-white">
        {title}
      </h2>
    </div>
  </Link>
);

const GridWeb = () => {
  const gridItems = [
    {
      href: "/webSite",
      imageSrc:
        "https://res.cloudinary.com/di1v23yy0/image/upload/v1694212382/desarrollo-sitios-web-multiplataforma-aplicaciones-moviles-portatiles-ia-generativa_914455-3358_honhjn.avif",
      title: "DESARROLLO NATIVO",
    },
    {
      href: "/webSite",
      imageSrc:
        "https://res.cloudinary.com/di1v23yy0/image/upload/v1694212382/desarrollo-sitios-web-multiplataforma-aplicaciones-moviles-portatiles-ia-generativa_914455-3350_caqlai.avif",
      title: "DESARROLLO MIXTO",
    },
    {
      href: "/webSite",
      imageSrc:
        "https://res.cloudinary.com/di1v23yy0/image/upload/v1694212381/desarrollo-sitios-web-multiplataforma-aplicaciones-moviles-portatiles-generative-ai_870512-1181_joapsh.avif",
      title: "GESTOR DE CONTENIDO",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 sm:pt-20 ps-20">
      {gridItems.map((item, index) => (
        <GridItem key={index} {...item} isSecond={index === 1} />
      ))}
    </div>
  );
};

export default GridWeb;

