// components/Layout.js

import ContactWhatsapp from './ContactWhatsapp';
import Header from './Header'; // Importa tu componente de encabezado


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
     <ContactWhatsapp/>
    </div>
  );
};

export default Layout;
