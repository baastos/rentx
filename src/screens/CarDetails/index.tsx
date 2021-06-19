import React from 'react'
import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { Container, Header } from './styles'


export function CarDetails() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.text} />

      </Header>
    </Container>
  )
}