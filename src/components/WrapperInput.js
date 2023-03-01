import styled from 'styled-components';

export const WrapperInput = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 40px 0;
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
    color: var(--text-color);
  }
`;
