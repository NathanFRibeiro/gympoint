import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 15px 10px 10px 10px;
`;

export const Empty = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  color: #999;
`;

export const CheckinList = styled.FlatList`
  width: 100%;
  margin-top: 15px;
`;

export const CheckinItem = styled.View`
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 15px;

  margin-top: 15px;

  border-radius: 4px;
  border: 1px #dddddd;
  background: #ffffff;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #444444;
`;

export const OccurredAt = styled.Text`
  color: #666666;
`;
