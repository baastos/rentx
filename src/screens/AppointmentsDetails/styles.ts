import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;

`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px; ;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {padding: 24, alignItems: 'center'},
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  margin-top: 36px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  color: ${({theme})=> theme.colors.text_detail};
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  color: ${({theme})=> theme.colors.text_detail};
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
`;

export const Price = styled.Text`
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  color: ${({theme})=> theme.colors.main};
  font-size: ${RFValue(25)}px;
`;
export const Accessories = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 16px;

`;


export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme})=> theme.colors.line};
  padding-bottom: 16px;
  margin-bottom: 16px;
  margin-top: 39px;

`;

export const DateIcon = styled.View`
  background-color: ${({theme})=> theme.colors.main};
  width:48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const DatePeriod = styled.View``;

export const DateText = styled.Text`
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  color: ${({theme})=> theme.colors.text_detail};
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;
export const TotalRentPeriod = styled.View`
  width: 100%;
`;

export const TotalLabel = styled.Text`
  font-family: ${({theme})=> theme.fonts.secondary_regular};
  color: ${({theme})=> theme.colors.text_detail};
  text-transform: uppercase;
  font-size: ${RFValue(10)}px;
`;

export const TotalQuota = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPeriodPrice = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const TotalPrice = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.success};
  font-size: ${RFValue(24)}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({theme})=> theme.colors.background_primary};
`;