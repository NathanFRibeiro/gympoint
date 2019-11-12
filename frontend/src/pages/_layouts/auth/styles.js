import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ee4d64;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 450px;
  text-align: center;

  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      padding: 5px 0px;

      strong {
        text-transform: uppercase;
        color: ${darken(0.5, '#EE4D64')};
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        background: #ffff;
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #222;
        margin: 0 0 10px;

        &::placeholder {
          color: rgba(180, 180, 180);
        }
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
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
        background: ${darken(0.03, '#EE4D64')};
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
