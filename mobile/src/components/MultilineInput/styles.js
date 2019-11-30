import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 15px 0px;
  height: 250px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: flex-start;

  border: 1px solid #dddddd;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 5px;
  color: #555;
  height: 200px;
`;
