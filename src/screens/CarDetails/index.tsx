import React from 'react'
import { useTheme } from 'styled-components'
import { Accessory } from '../../components/Accessory'
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
  Accessories,
  About,
  Footer
} from './styles'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import CarDTO from '../../dtos/carDTO'

interface RouteParams{
  car: CarDTO
}

export function CarDetails() {
  const navigation = useNavigation()
  const route = useRoute()

  const {car} = route.params as RouteParams

  function handleNavigate(route: string){
    navigation.navigate(route)
  }
  function handleBack(){
    navigation.goBack()
  }
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.text} />
      </Header>

      <CarImages>

        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>

          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map(accessory=> (
            <Accessory key={accessory.name} name={accessory.name} icon={speedSvg} />
          ))}
          
        </Accessories >
        <About>
        {car.about}
        </About>
      </Content>
      <Footer>
        <Button onPress={()=> handleNavigate('Appointments')} text="Escolher período do aluguel" />
      </Footer>
    </Container>
  )
}