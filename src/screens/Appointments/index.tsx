import React from 'react'
import { BackButton } from '../../components/BackButton'
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, PeriodRental, DatePeriod, Text, DateValue, Content, Footer } from './styles'
import { Alert, StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { Calendar, DayProps, MarkedDatesProps } from '../../components/Calendar'
import {getPlatformDate} from '../../utils/getPlatformDate'
import {format, eachDayOfInterval} from 'date-fns'

import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import CarDTO from '../../dtos/carDTO'

export interface PeriodDates{
  startFormatted: string;
  endFormatted: string;
}

interface RouteParams{
  car: CarDTO
}

export function Appointments() {
  const [selectDate, setSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
  const [periodDates, setPeriodDates] = useState<PeriodDates>({} as PeriodDates)

  const route = useRoute()
  const {car} = route.params as RouteParams
  const navigation = useNavigation()
  const theme = useTheme()

  function handleNavigate(route: string){
    if(!periodDates.startFormatted || !periodDates.endFormatted ){
      Alert.alert('Selecione um periodo de aluguel')
      return;
    }
    navigation.navigate(route, {
      car,
      periodDates,
      markedDates
    })
  }
  function handleBack(){
    navigation.goBack()
  }
  function generateInterval(start: DayProps, end: DayProps){
    let interval: MarkedDatesProps = {}
    eachDayOfInterval({start: new Date(start.timestamp), end: new Date(end.timestamp)}).forEach(item=>{
      const date = format(getPlatformDate(item), 'yyyy-MM-dd')

      interval = {
        ...interval,
        [ date ]:{
          color:  start.dateString === date  || end.dateString === date ? theme.colors.main : theme.colors.main_light,
          textColor: start.dateString === date  || end.dateString === date ? theme.colors.main_light : theme.colors.main,
        }
      }
    })
    return interval
  }
  function handleDateChange(day: DayProps){
    let start = !selectDate.timestamp ? day : selectDate
    let end = day

    if(start.timestamp > end.timestamp){
      start = end
      end = start
    }
    setSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)
    console.log()
    const startDate = format(new Date(Object.keys(interval)[0]), 'dd/MM/yyyy')
    const endDate = format(new Date(Object.keys(interval)[Object.keys(interval).length - 1]), 'dd/MM/yyyy')

    setPeriodDates({
      startFormatted: startDate,
      endFormatted: endDate
    })

  }
  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={handleBack} />
        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>
        <PeriodRental>
          <DatePeriod>
            <Text>DE</Text>
            <DateValue selected={!!periodDates.startFormatted}>{periodDates.startFormatted}</DateValue>
          </DatePeriod>

          <ArrowSvg />
          <DatePeriod>
            <Text>ATÉ</Text>
            <DateValue selected={!!periodDates.endFormatted}>{periodDates.endFormatted}</DateValue>
          </DatePeriod>
        </PeriodRental>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleDateChange}/>
      </Content>

      <Footer>
        <Button onPress={()=> handleNavigate('AppointmentsDetails')} text="Confirmar" />
      </Footer>

    </Container>
  )
}