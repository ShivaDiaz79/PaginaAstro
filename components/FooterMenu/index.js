import React from 'react'
import Link from 'next/link'

const FooterMenu = () => {
  return (
    <div>
        <footer
	className="py-3 px-10 flex justify-center items-center absolute bottom-0 w-full z-40 text-gray-600 text-xs font-medium"
	id="landing-footer"
>
	<nav>
		<ul className="flex [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2">
			<li><Link href="#">Astro Estudio © 2023</Link></li>
			<li><Link href="/privacidadLegal">Privacidad y legal</Link></li>
			<li><Link href="/contacto">Contacto</Link></li>
			<li><Link href="/cotiza">Cotizaciones</Link></li>
			{/* <li><Link href="#">Seguir informado</Link></li>
			<li><Link href="/contacto">Localización de tiendas</Link></li> */}
		</ul>
	</nav>
</footer>
    </div>
  )
}

export default FooterMenu