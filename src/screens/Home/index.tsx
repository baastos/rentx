import React from 'react'
import { StatusBar } from 'react-native'
import { CarList, Container, Header, HeaderContent, TotalCarsText } from './styles'
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { useNavigation } from '@react-navigation/native'



export function Home() {
  const navigation = useNavigation()

  function handleNavigate(route: string){
    navigation.navigate(route)
  }
  const data = [{
    brand: 'Audi',
    name: 'RS 5 Coupé',
    period: 'Ao dia',
    price: 'R$ 120',
    image_url: 'https://catalogo.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841521101233346.png?s=fill&w=440&h=330&q=80&t=true'
  }]
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo />
          <TotalCarsText>Total de 12 carros</TotalCarsText>
        </HeaderContent>
      </Header>
      <CarList data={[1, 2, 3]} keyExtractor={item => String(item)} renderItem={({ item }) => <Car onPress={()=> handleNavigate('CarDetails')}  data={data[0]} />} />

    </Container>

  )
}