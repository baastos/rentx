import React from 'react'
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Type,
  Price,
  CarImage,
} from './styles'
import Icon from '../../assets/gasoline.svg'

interface CarProps {

  brand: string,
  name: string,
  period: string,
  price: string,
  image_url: string

}

interface Car {
  data: CarProps
}

export function Car({ data }: Car) {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{data.price}</Price>
          </Rent>
          <Type>
            <Icon />

          </Type>
        </About>

      </Details>
      <CarImage resizeMode="contain" source={{ uri: data.image_url }} />
    </Container>
  )
}