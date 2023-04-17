import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const Button = styled.button`
  height: 40px;
  margin: 10px;
  display: flex;
  line-height: 43px;
  padding: 0 40px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;

  &:nth-of-type(1) {
    background-color: #F2D8FF;
    color: black;
    font-weight: 900;
    font-size: 22px;
    box-shadow: inset 0em 0em 15px 4px;
  }
  &:nth-of-type(1):hover {
    inset 0em 0em 20px 10px;
    transition: 0.2s;
    transform: translateY(2px);
  }
  &:nth-of-type(2) {
    background-color: #F2D8FF;
    color: black;
    font-weight: 900;
    font-size: 22px;
    box-shadow: inset 0em 0em 15px 4px;
  }
  &:nth-of-type(2):hover {
    inset 0em 0em 20px 10px;
    transition: 0.2s;
    transform: translateY(2px);
  }
  &:nth-of-type(3) {
    background-color: #F2D8FF;
    color: black;
    font-weight: 900;
    font-size: 22px;
    box-shadow: inset 0em 0em 15px 4px;
  }
  &:nth-of-type(3):hover {
    inset 0em 0em 20px 10px;
    transition: 0.2s;
    transform: translateY(2px);
  }
`;