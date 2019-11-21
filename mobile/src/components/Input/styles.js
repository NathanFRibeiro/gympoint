import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 15px 0px;
  padding: 0 10px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dddddd;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #555;
`;
