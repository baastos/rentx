import React from 'react'
import { BackButton } from '../../components/BackButton'
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, PeriodRental, DatePeriod, Text, DateValue, Content, Footer } from './styles'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'

export function Appointments() {

  const navigation = useNavigation()

  function handleNavigate(route: string){
    navigation.navigate(route)
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton />
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
        <Calendar/>
      </Content>

      <Footer>
        <Button onPress={()=> handleNavigate('AppointmentsDetails')} text="Confirmar" />
      </Footer>

    </Container>
  )
}