import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {options.map(name => (
        <Button key={name} id={name} onClick={() => onLeaveFeedback(name)}>
          {makeFirstLetterToUppperCase(name)}
        </Button>
      ))}
    </Container>
  );
}

function makeFirstLetterToUppperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
