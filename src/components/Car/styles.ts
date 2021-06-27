import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: ${RFValue(126)}px;
  padding: 17px 24px;
  background: ${({theme})=> theme.colors.background_secondary };

  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;

`;

export const Details = styled.View``;


export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme})=> theme.fonts.secondary_medium};
  text-transform: uppercase;
  color:${({theme})=> theme.colors.text_detail};
`;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.secondary_medium};
  color:${({theme})=> theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: flex-end;
`;

export const Rent = styled.View`
`;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme})=> theme.fonts.secondary_medium};
  text-transform: uppercase;
  color:${({theme})=> theme.colors.text_detail};
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.secondary_medium};
  color:${({theme})=> theme.colors.main};
`;

export const CarImage = styled.Image`
  height: 92px;
  width: 160px;
`;

export const Type = styled.View`
margin-left: 25px;
`;
