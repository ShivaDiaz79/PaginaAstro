import React from 'react';
import Head from 'next/head';
import ContactWhatsapp from './ContactWhatsapp';
import Header from './Header';

const Layout = ({ children, title = 'Astro Estudio', description = 'Agencia de marketing' }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/astro.favicon.ico" />
      </Head>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <ContactWhatsapp />
    </div>
  );
};

export default Layout;


