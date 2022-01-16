import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

const ImageCard = ({ src, alt }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.onload = () => {
      const height = imageRef.current.clientHeight;
      const newSpans = Math.ceil(height / 5 + 1);
      setSpans(newSpans);
    };
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={src} alt={alt} />
    </div>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageCard;
