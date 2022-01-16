import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ImageCard from './ImageCard';
import './ImageList.css';

const extractNumber = (str) => Number(str.replace(/.*\((\w+)\).*/, '$1'));

const ImageList = ({ images }) => {
  const [showMore, setShowMore] = useState(false);

  const onButtonClick = () => setShowMore((prevShowMore) => !prevShowMore);

  const numberOfItems = showMore ? images.length : 10;
  return (
    <>
      <div className="image-list">
        {images
          .sort((a, b) => extractNumber(a) - extractNumber(b))
          .slice(0, numberOfItems)
          .map((image) => {
            const imageNumber = extractNumber(image);

            return <ImageCard key={imageNumber} src={image} alt={`photo-${imageNumber}`} />;
          })}
      </div>
      <Row xs={1} className="mx-0 mt-3 g-0 justify-content-center ">
        <Col xs="auto">
          <Button variant={showMore ? 'outline-danger' : 'outline-info'} onClick={onButtonClick}>
            {showMore ? 'Show less' : `Show ${images.length - numberOfItems} more`}
          </Button>
        </Col>
      </Row>
    </>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
