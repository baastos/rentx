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
import { RectButtonProperties } from 'react-native-gesture-handler'
import CarDTO from '../../dtos/carDTO'
import { getAccessoryType } from '../../utils/getAccessoryType'

interface CarProps {

  brand: string,
  name: string,
  period: string,
  price: string,
  image_url: string

}

interface Car extends RectButtonProperties {
  data: CarDTO
}

export function Car({ data, ...rest }: Car) {
  const Icon = getAccessoryType(data.fuel_type)
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>R$ {data.rent.price}</Price>
          </Rent>
          <Type>
            <Icon/>
          </Type>
        </About>

      </Details>
      <CarImage resizeMode="contain" source={{ uri: data.thumbnail }} />
    </Container>
  )
}