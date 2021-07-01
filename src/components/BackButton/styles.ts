import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


export const Button = styled(BorderlessButton)`

  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
  margin-left: -16px;
`;

