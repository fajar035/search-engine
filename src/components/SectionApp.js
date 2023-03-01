import styled from 'styled-components';

export const SectionApp = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #18122b;
  .wrapperResult {
    margin: 50px 0;
    p {
      font-family: 'Nunito', sans-serif;
      font-size: 30px;
      color: var(--title-color);
      font-weight: 600;
    }
  }
`;
