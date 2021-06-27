import React from 'react'
import { useTheme } from 'styled-components'
import { Acessory } from '../../components/Acessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import accelerationSvg from '../../assets/acceleration.svg'
import exchangeSvg from '../../assets/exchange.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import forceSvg from '../../assets/force.svg'
import peopleSvg from '../../assets/people.svg'
import speedSvg from '../../assets/speed.svg'

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  About,
  Footer
} from './styles'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'


export function CarDetails() {
  const navigation = useNavigation()

  function handleNavigate(route: string){
    navigation.navigate(route)
  }
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.text} />
      </Header>

      <CarImages>

        <ImageSlider imagesUrl={["https://catalogo.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841521101233346.png?s=fill&w=440&h=330&q=80&t=true"]} />
      </CarImages>

      <Content>
        <Details>

          <Description>
            <Brand>Audi</Brand>
            <Name>RS 5 Coupé</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 pessoas" icon={peopleSvg} />
        </Acessories >
        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button onPress={()=> handleNavigate('Appointments')} text="Escolher período do aluguel" />
      </Footer>
    </Container>
  )
}