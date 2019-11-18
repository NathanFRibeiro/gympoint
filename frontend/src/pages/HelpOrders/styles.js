import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 550px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const OrdersTable = styled.table`
  width: 100%;
  padding: 20px 25px;
  background: #fff;
  border-radius: 5px;

  thead th {
    font-size: 16px;
    color: #333;
    text-align: left;
    padding: 12px 0px;
  }

  tbody td {
    font-size: 16px;
    border-bottom: 1px solid #eee;
    color: #555;
    padding: 12px 0px;

    :nth-child(1) {
      width: 90%;
    }
  }

  button {
    width: 30px;
    height: 30px;
    background: #ee4d64;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#EE4D64')};
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  height: 100%;
  align-items: space-between;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    :nth-child(2) {
      margin-top: auto;
    }

    strong {
      color: #333;
      margin-bottom: 5px;
    }

    p {
      color: #f1f1f1;
      margin-top: 10px;
      margin-left: 7px;
      background: #ee4d64;
      padding: 10px 15px;
      border-radius: 4px;
      max-height: 110px;
      overflow-y: auto;
    }

    p:before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      left: 19px;
      right: auto;
      top: 51px;
      bottom: auto;
      border: 15px solid;
      border-color: #ee4d64 transparent transparent transparent;
    }

    span {
      font-weight: bold;
      color: #ee4d64;
    }

    textarea {
      height: 140px;
      background: #ffff;
      border: 1px solid #cccc;
      border-radius: 4px;
      padding: 5px;
      color: #333;
    }

    button {
      margin: 5px 0 0;
      height: 30px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
