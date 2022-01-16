import React from 'react';
import About from './About';
import Commercial from './Commercial';
import Contact from './Contact';
import Cover from './Cover';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';

const App = () => (
  <>
    <Header />
    <main>
      <Cover />
      <About />
      <Portfolio />
      <Commercial />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
