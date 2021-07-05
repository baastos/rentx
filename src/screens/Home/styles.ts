import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CarDTO from '../../dtos/carDTO';

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

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  
  contentContainerStyle:{ padding: 24}  
})``;

export const MyCarsButton = styled(RectButton)`
  background: ${({theme})=> theme.colors.main};
  width: 60px;
  height: 60px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 13px;
  right: 22px;

`;



