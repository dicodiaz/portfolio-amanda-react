import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const videos = [
  {
    id: uuidv4(),
    src: 'https://www.youtube.com/embed/8tl5_45BKyU?controls=0&start=18',
    title: '#ExplícalaComoQuieras - Hero Motos',
  },
  {
    id: uuidv4(),
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0',
    title: 'Rick Astley - Never Gonna Give You Up',
  },
];

const Commercial = () => {
  const [height, setHeight] = useState(0);
  const iFrameRef = useRef();

  useEffect(() => {
    setHeight(iFrameRef.current.clientWidth);
  }, []);

  return (
    <Container as="section" id="commercial" className="py-5" fluid>
      <Row className="mx-0 g-0 justify-content-center">
        <Col sm={10} md={9} lg={8} xl={7} ref={iFrameRef}>
          <Carousel interval={null}>
            {videos.map((video) => {
              const { id, src, title } = video;

              return (
                <Carousel.Item key={id}>
                  <iframe src={src} title={title} width="100%" height={`${height}px`} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Commercial;
