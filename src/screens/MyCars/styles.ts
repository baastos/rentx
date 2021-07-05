import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CarDTO from '../../dtos/carDTO';

interface MyCars{
  user_id: number;
  startDate: string;
  endDate: string;
  car: CarDTO;
  id: number;
}

export const Container = styled.View`
  flex: 1;
  background: ${({theme})=> theme.colors.background};
`;

export const Header  = styled.View`
  height: 273px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.header};
  padding: ${getStatusBarHeight() + 36 }px 24px 36px;
  
`;

export const Title = styled.Text`
  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.secondary_semibold};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  margin-top: 18px;

`;

export const Description = styled.Text`
  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  font-size: ${RFValue(15)}px;
  margin-top: 18px;
`;

export const Content = styled.View`
flex: 1;
`

export const ContentHeader = styled.View`
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.Text`
  color: ${({theme})=> theme.colors.text};
  font-family: ${({theme})=> theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
`

export const Quantity = styled.Text`
  color: ${({theme})=> theme.colors.title};
  font-family: ${({theme})=> theme.fonts.secondary_medium};
  font-size: ${RFValue(15)}px;
`
export const MyCarsList = styled(FlatList as new () => FlatList<MyCars>).attrs({
  contentContainerStyle:{ paddingHorizontal: 16, paddingBottom: 24 },
  showsVerticalScrollIndicator: false  
})``;