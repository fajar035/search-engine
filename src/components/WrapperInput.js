import styled from 'styled-components';

export const WrapperInput = styled.form`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #393053;
  border-radius: 5px;
  margin: 40px 0;
  position: relative;
  transition: 1s;
  .icon {
    width: 30px;
    height: 30px;
    transition: 0.3s;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: var(--text-color);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #e3dffd;
  }
`;

export const WrapperSuggest = styled.div`
  position: absolute;
  top: 49px;
  left: 0;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #635985;
  transition: 1s;
  display: ${({ data }) => (data.length !== 0 ? 'visible' : 'none')};
  p {
    margin: 10px 0;
    font-size: 20px;
    color: var(--title-color);
    font-family: 'Nunito', sans-serif;
  }
`;
