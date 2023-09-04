import React from 'react'

const Index = () => {
  return (
    <div>
        <footer
	className="py-3 px-10 flex justify-center items-center absolute bottom-0 w-full z-40 text-gray-600 text-xs font-medium"
	id="landing-footer"
>
	<nav>
		<ul className="flex [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2">
			<li><a href="#">Astro Estudio © 2023</a></li>
			<li><a href="#">Privacidad y legal</a></li>
			<li><a href="#">Contacto</a></li>
			<li><a href="#">Noticias</a></li>
			<li><a href="#">Seguir informado</a></li>
			<li><a href="#">Localización de tiendas</a></li>
		</ul>
	</nav>
</footer>
    </div>
  )
}

export default Index