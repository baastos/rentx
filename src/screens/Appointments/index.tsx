import React from 'react'
import { BackButton } from '../../components/BackButton'
import ArrowSvg from '../../assets/arrow.svg'
import { Container, Header, Title, PeriodRental, DatePeriod, Text, DateValue, Content, Footer } from './styles'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
export function Appointments() {
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

      <Content />

      <Footer>
        <Button text="Confirmar" />
      </Footer>

    </Container>
  )
}