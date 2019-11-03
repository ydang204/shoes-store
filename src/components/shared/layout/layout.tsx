import React from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
