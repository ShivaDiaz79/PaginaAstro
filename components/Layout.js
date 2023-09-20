// components/Layout.js

import Header from './Header'; // Importa tu componente de encabezado


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
     
    </div>
  );
};

export default Layout;
