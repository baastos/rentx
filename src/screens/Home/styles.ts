import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme})=> theme.colors.background};
`;

export const Header = styled.View`
  height: 113px;
  background-color: ${({theme})=> theme.colors.header};
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
`;

export const TotalCarsText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.primary_regular};
  color: ${({theme})=> theme.colors.text};
`;

export const CarList = styled.FlatList.attrs({
  
  contentContainerStyle:{ padding: 24}  
})``;


