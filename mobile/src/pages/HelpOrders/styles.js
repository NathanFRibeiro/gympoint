import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 15px 10px 10px 10px;
`;

export const OrderList = styled.FlatList`
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
`;

export const Empty = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  color: #999;
`;

export const OrderItem = styled.View`
  display: flex;

  padding: 20px;

  margin-bottom: 15px;

  border-radius: 4px;
  border: 1px #dddddd;
  background: #ffffff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StatusArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.Text`
  padding-left: 5px;
  font-weight: bold;
  color: #999;

  ${({ answered }) =>
    answered &&
    `
    color: green;
  `}
`;

export const OccurredAt = styled.Text`
  color: #666666;
`;

export const Question = styled.Text`
  margin-top: 10px;
  color: #666666;
  line-height: 21px;
`;
