import React from 'react'
import { Container, Text } from './styles'

import { RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
  text: string;
  color?: string;
}

export function Button({ text, color, ...rest }: Props) {
  return (
    <Container color={color}>
      <Text>{text}</Text>
    </Container>
  )
}