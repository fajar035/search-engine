import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 30px;
  color: var(--title-color);
`;

export const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;
