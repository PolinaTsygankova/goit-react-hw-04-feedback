import PropTypes from 'prop-types';

import { ListItems, Container } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Container>
      <ListItems>Good: {good}</ListItems>
      <ListItems>Neutral: {neutral}</ListItems>
      <ListItems>Bad: {bad}</ListItems>
      <ListItems>Total: {total}</ListItems>
      <ListItems>Positive feedback: {positivePercentage}%</ListItems>
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
