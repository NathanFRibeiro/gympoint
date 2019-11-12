import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;

  aside {
    width: 380px;
    display: flex;
    justify-content: space-between;

    input {
      width: 290px;
      background: #ffff;
      border: 1px solid #cccc;
      border-radius: 4px;
      height: 30px;
      padding: 0 15px;
      color: #222;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(180, 180, 180);
      }
    }

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
  }
`;

export const StudentTable = styled.table`
  width: 100%;
  padding: 15px;
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

    div {
      width: 50%;
      display: flex;
      justify-content: space-between;
      margin-left: 50px;
    }

    :nth-child(1) {
      width: 40%;
    }

    :nth-child(4) {
      width: 15%;
    }
  }
`;
