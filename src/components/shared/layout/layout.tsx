import React from 'react';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
