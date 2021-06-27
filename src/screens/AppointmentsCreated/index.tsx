import React from 'react'
import { useWindowDimensions } from 'react-native'
import BackgroundLogo from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import {StatusBar} from 'react-native'
import { Container, Content, Title, Description, Button, ButtonText } from './styles'
import { useNavigation } from '@react-navigation/native'

export function AppointmentsCreated(){
  const navigation = useNavigation()

  function handleNavigate(route: string){
    navigation.navigate(route)
  }
  const { width } = useWindowDimensions();
  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <BackgroundLogo width={width}/>
      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado!</Title>

        <Description>
        Agora você só precisa ir {"\n"}
        até a concessionária da RENTX {"\n"}
        pegar o seu automóvel.
        </Description>

        <Button onPress={()=> handleNavigate('Home')}>
         <ButtonText>Ok</ButtonText> 
        </Button>

      </Content>
    </Container>
  )
}