import React from 'react'
import { BackButton } from '../../components/BackButton'
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, PeriodRental, DatePeriod, Text, DateValue, Content, Footer } from './styles'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { Calendar, DayProps, MarkedDatesProps } from '../../components/Calendar'
import {getPlatformDate} from '../../utils/getPlatformDate'
import {format, eachDayOfInterval} from 'date-fns'

import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useTheme } from 'styled-components'

export function Appointments() {
  const [lastSelectedDate, setSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
  const navigation = useNavigation()
  const theme = useTheme()

  function handleNavigate(route: string){
    navigation.navigate(route)
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
    let start = !lastSelectedDate.timestamp ? day : lastSelectedDate
    let end = day

    if(start.timestamp > end.timestamp){
      start = end
      end = start
    }
    setSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)
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
            <DateValue selected={false}></DateValue>
          </DatePeriod>

          <ArrowSvg />
          <DatePeriod>
            <Text>ATÉ</Text>
            <DateValue selected={false}></DateValue>
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