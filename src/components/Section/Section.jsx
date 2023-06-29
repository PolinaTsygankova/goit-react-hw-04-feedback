import PropTypes from 'prop-types';

import { StyledSection, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <StyledSection>
      {title && <Title>{title}</Title>}
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
