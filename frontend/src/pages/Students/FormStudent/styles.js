import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 40px 30px;
    border-radius: 5px;

    div {
      margin: 0px 0 10px;
    }

    input {
      width: 100%;
      background: #ffff;
      border: 1px solid #cccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #222;
      font-size: 16px;
      margin-top: 10px;

      &::placeholder {
        color: #9999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      font-weight: bold;
    }

    strong {
      text-transform: uppercase;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const HorizontalInputs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div {
    width: 350px;
    margin-bottom: 10px;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;

  button {
    width: 80px;
    height: 30px;
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#EE4D64')};
    }
  }
`;
