import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #f5f5f5;

  padding: 15px 10px 10px 10px;
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

export const Status = styled.Text`
  font-weight: bold;
  color: #666666;

  ${({ answered }) =>
    answered &&
    `
    color: green;
  `}
`;

export const OccurredAt = styled.Text`
  color: #666666;
`;

export const Title = styled.Text`
  color: #444;
  font-weight: bold;
`;

export const Question = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: #666666;
  line-height: 21px;
`;

export const Answer = styled(Question)`
  margin-bottom: 15px;
`;
