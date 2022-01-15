import PropTypes from 'prop-types';
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.onload = () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 5 + 1);
      this.setState({ spans });
    };
  }

  render() {
    const { image } = this.props;
    const { spans } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={this.imageRef} src={image} alt={image} />
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageCard;
