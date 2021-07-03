import React from 'react'
import { useTheme } from 'styled-components'
import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Feather } from '@expo/vector-icons'


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
  Footer,
  RentalPeriod,
  DateIcon,
  DatePeriod,
  DateText,
  DateValue,
  TotalRentPeriod,
  TotalPrice,
  TotalLabel,
  TotalQuota,
  RentalPeriodPrice
} from './styles'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import CarDTO from '../../dtos/carDTO'
import { getAccessoryType } from '../../utils/getAccessoryType'
import { MarkedDatesProps } from '../../components/Calendar'
import { PeriodDates } from '../Appointments'
import api from '../../services/api'
import { Alert } from 'react-native'

interface RouteParams{
  car: CarDTO;
  markedDates: MarkedDatesProps;
  periodDates: PeriodDates;
}

export function AppointmentsDetails() {
  const navigation = useNavigation()
  const theme = useTheme()
  const route = useRoute()
  const {car, markedDates, periodDates} = route.params as RouteParams
  const rentalPeriodPrice= `R$ ${car.rent.price} x${Object.keys(markedDates).length} diárias`
  const rentalTotalPrice= `R$ ${car.rent.price * Object.keys(markedDates).length}`
  const dates = Object.keys(markedDates)
  function handleNavigate(route: string){
    navigation.navigate(route)
  }
  function handleBack(){
    navigation.goBack()
  }

  async function handleConfirmRent(){
    try {
      const schedulesByCar = await api.get(`schedules_bycars/${car.id}`)
      const unavailable_dates = [
        ...schedulesByCar.data.unavailable_dates,
        ...dates
      ]
      await api.put(`schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
      })
      handleNavigate('AppointmentsCreated')
    } catch (error) {
      Alert.alert('Erro ao tentar alugar este carro')
    }
  }

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

          <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryType(accessory.type)} />
          ))}
          
        </Accessories >
        <RentalPeriod>
          <DateIcon>
            <Feather name="calendar" size={20} color={theme.colors.background_secondary}/>
          </DateIcon>
          <DatePeriod>
            <DateText>De</DateText>
            <DateValue>{periodDates.startFormatted}</DateValue>
          </DatePeriod>
          <Feather name="chevron-right" size={20} color={theme.colors.text}/>
          <DatePeriod>
          <DateText>Ate</DateText>
          <DateValue>{periodDates.endFormatted}</DateValue>
          </DatePeriod>
          
        </RentalPeriod>
        <TotalRentPeriod>
          <TotalLabel>Total</TotalLabel>
          <TotalQuota>
            <RentalPeriodPrice>{rentalPeriodPrice}</RentalPeriodPrice>
            <TotalPrice>{rentalTotalPrice}</TotalPrice>
          </TotalQuota>
        </TotalRentPeriod>
      </Content>
      <Footer>
        <Button color={theme.colors.success} onPress={handleConfirmRent} text="Alugar agora" />
      </Footer>
    </Container>
  )
}