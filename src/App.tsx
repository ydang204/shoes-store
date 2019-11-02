import React from 'react';
import './App.scss';
import Landing from './components/pages/landing/landing';
import Sample from './components/pages/sample/sample';
import Footer from './components/shared/footer/footer';
import Menu from './components/shared/menu/menu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <Landing></Landing>
      <Sample></Sample>
      <Footer />
    </div>
  );
};

export default App;
