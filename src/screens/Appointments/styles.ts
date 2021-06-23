import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Header  = styled.View`
  height: 325px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.header};
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 36 }px;
  

  

`;

export const Title = styled.Text`
  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.secondary_semibold};
  font-size: ${RFValue(30)}px;
  margin-top: 41px;
`;

export const PeriodRental = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 32px 0;
`;
export const DatePeriod = styled.View`
  width: 30%;
`;

export const Text = styled.Text`
  color: ${({theme})=> theme.colors.text};
  font-family: ${({theme})=> theme.fonts.secondary_medium};
  font-size: ${RFValue(10)}px;
`;

interface DateValueProps{
  selected: boolean;
}
export const DateValue = styled.Text<DateValueProps>`

  color: ${({theme})=> theme.colors.shape};
  font-family: ${({theme})=> theme.fonts.primary_medium};
  font-size: ${RFValue(15)}px;

  margin-top: 9px;

  ${({selected})=> !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${({theme})=> theme.colors.text};
    padding-bottom: 5px;
    width: 83px;

  `}
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {paddingBottom: 24},
  showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
  padding:24px 24px ${getBottomSpace() + 24}px;
`;