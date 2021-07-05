import React from 'react'
import {
  Container,
  Content,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Type,
  Price,
  CarImage,
  Footer,
  Text,
  DatePeriod,
  DateValue
} from './styles'
import ArrowSvg from '../../assets/arrow.svg'

import { RectButtonProperties } from 'react-native-gesture-handler'
import CarDTO from '../../dtos/carDTO'
import { getAccessoryType } from '../../utils/getAccessoryType'

interface Car extends RectButtonProperties {
  data: CarDTO;
  myCars?: boolean;
  startDate?: string;
  endDate?: string;
}

export function Car({ data, myCars, startDate, endDate, ...rest }: Car) {
  const Icon = getAccessoryType(data.fuel_type)
  return (
    <Container {...rest}>
      <Content>
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
      </Content>
      {myCars && (
      <Footer>
        <Text>Período</Text>
        <DatePeriod>
          <DateValue>{startDate}</DateValue>
          <ArrowSvg width={14} height={14} />
          <DateValue>{endDate}</DateValue>
        </DatePeriod>
    </Footer>
    )}
    
    </Container>
  )
}