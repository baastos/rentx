import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.header} ;

  padding-top: 40px;

`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: 80px;
  margin-top: 27px;

`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({theme})=> theme.fonts.secondary_semibold};
  color: ${({theme})=> theme.colors.background_secondary};

  margin-top: 40px;
`;
export const Description = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.primary_regular};
  line-height: ${RFValue(25)}px;
  color: ${({theme})=> theme.colors.text_detail};
  
  text-align: center;
  margin-top: 16px;
`;

export const Button = styled(RectButton)`
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color:${({theme})=> theme.colors.shape_dark};
  padding: 25px;
  margin: 80px 0px;
  
`
export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.background_secondary};
`;

