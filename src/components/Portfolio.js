import React from 'react';
import { Container } from 'react-bootstrap';
import ImageList from './ImageList';

// Pending: Fix syntax error
const importAll = (r) => r.keys().map((item) => r(item).default).sort((a, b) => Number(a.replace(/\w/, '$&') - Number(b.replace(/\w/, '$&')));

const Portfolio = () => {
  const images = importAll(require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/));

  return (
    <Container as="section" className="py-5 bg-dark text-white" fluid>
      <h2 className="pt-5 display-6 text-center">
        <span className="py-2 border-bottom">Portfolio</span>
      </h2>
      <ImageList images={images} />
    </Container>
  );
};

export default Portfolio;
