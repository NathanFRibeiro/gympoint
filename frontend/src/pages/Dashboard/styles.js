import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

export const Panel = styled.div`
  width: 100%;
  padding: 45px;
  background: #fff;
  border-radius: 5px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    /* background: #ee4d64;
    width: 150px;
    height: 100px;
    border-radius: 20px;
    padding: 35px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    color: #f2f2f2; */

    display: flex;
    width: 500px;

    justify-content: center;
    align-items: center;
    background: ${lighten(0.02, '#EE4D64')};
    border-radius: 8px;
    transition: all 0.2s ease 0s;
    padding: 80px 50px;
    margin: 20px;
    font-size: 30px;
    color: #f2f2f2;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;

    span {
      margin-left: 30px;
      font-weight: bold;
    }

    &:hover {
      background: ${darken(0.05, lighten(0.02, '#EE4D64'))};
      transform: translateY(-7px);
    }
  }
`;
