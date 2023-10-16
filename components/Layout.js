import ContactWhatsapp from './ContactWhatsapp';
import Header from './Header'; // Importa tu componente de encabezado


const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <ContactWhatsapp />
     
    </div>
  );
};

export default Layout;

