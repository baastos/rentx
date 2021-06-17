import React from 'react'
import { StatusBar } from 'react-native'
import { Container, Header, HeaderContent, TotalCarsText } from './styles'
import Logo from '../../assets/logo.svg'

export function Home() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo />
          <TotalCarsText>Total de 12 carros</TotalCarsText>
        </HeaderContent>
      </Header>
    </Container>
  )
}