// components/Layout.js

import Header from './Header'; // Importa tu componente de encabezado
import FooterMenu from './FooterMenu'; // Importa tu componente de pie de página

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <FooterMenu />
    </div>
  );
};

export default Layout;
