import React from 'react';
import About from './About';
import Commercial from './Commercial';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';

const App = () => (
  <>
    <Header />
    <main>
      <About />
      <Portfolio />
      <Commercial />
    </main>
    <Footer />
  </>
);

export default App;
