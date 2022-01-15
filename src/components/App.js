import React from 'react';
import Cover from './Cover';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';

const App = () => (
  <>
    <Header />
    <main>
      <Cover />
      <Portfolio />
    </main>
    <Footer />
  </>
);

export default App;
