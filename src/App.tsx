import React from 'react';

import './App.scss';
import Landing from './components/pages/landing/landing';
import Sample from './components/pages/sample/sample';
import Menu from './components/shared/menu';
import Footer from './components/shared/footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu></Menu>
      <Landing></Landing>
      <Sample></Sample>
      <Footer />
    </div>
  );
};

export default App;
