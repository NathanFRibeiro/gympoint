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

  button {
    width: 150px;
    height: 30px;
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
      background: ${darken(0.03, '#EE4D64')};
    }
  }
`;

export const EnrollmentTable = styled.table`
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #fff;
  border-radius: 5px;

  thead th {
    font-size: 16px;
    color: #333;
    text-align: left;
    padding: 12px 0px;

    :nth-child(5) {
      text-align: center;
    }
  }

  tbody td {
    font-size: 16px;
    border-bottom: 1px solid #eee;
    color: #555;
    padding: 12px 0px;

    div {
      width: 40%;
      display: flex;
      justify-content: space-between;
      margin-left: 50px;
    }

    :nth-child(1) {
      width: 25%;
    }

    :nth-child(5) {
      text-align: center;
    }

    :nth-child(6) {
      width: 15%;
    }
  }

  tbody center {
    color: #888;
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
