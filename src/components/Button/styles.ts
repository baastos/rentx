import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps{
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding:19px;
  background-color: ${({color,theme})=> color ? color : theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const Text =  styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=>  theme.colors.background_secondary};
  font-size: ${RFValue(15)}px;
`