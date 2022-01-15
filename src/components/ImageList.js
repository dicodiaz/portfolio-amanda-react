import PropTypes from 'prop-types';
import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => (
  <div className="image-list">
    {images.map((image) => (
      <ImageCard key={image} image={image} />
    ))}
  </div>
);

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
