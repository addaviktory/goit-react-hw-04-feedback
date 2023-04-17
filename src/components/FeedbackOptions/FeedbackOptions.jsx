import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <Container>
        {options.map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(`${option}`)}
          >
            {option}
          </Button>
        ))}
      </Container>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;