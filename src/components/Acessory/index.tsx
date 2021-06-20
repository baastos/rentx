import React from 'react'
import { SvgProps } from 'react-native-svg'
import { Container, Name } from './styles'

interface Props {
  icon: React.FC<SvgProps>
  name: string;
}

export function Acessory({ icon: Icon, name }: Props) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  )
}