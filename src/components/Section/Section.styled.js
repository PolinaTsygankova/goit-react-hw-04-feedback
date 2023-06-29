import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-left: 33%;
  width: 600px;
  text-align: center;
`;

export const Title = styled.p`
  margin: 30px;
  /* position: relative; */
  padding: 0;

  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  text-align: center;

  text-transform: uppercase;
  font-size: 26px;
  letter-spacing: 1px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;

  &:after,
  &:before {
    content: ' ';
    display: block;
    border-bottom: 2px solid #ccc;
    background-color: #f8f8f8;
  }
`;
