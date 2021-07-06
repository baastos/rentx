import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Text } from './styles'

import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

interface Props extends RectButtonProps {
  text: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({ text, enabled = true, loading = false, color, ...rest }: Props) {
  const theme = useTheme()
  return (
    <Container 
    style={{opacity: (enabled === false || loading) ? 0.5 : 1}}
    enabled={enabled} 
    color={color} 
    {...rest}>
     {loading ? <ActivityIndicator color={theme.colors.shape}/> : <Text>{text}</Text> }  
    </Container>
  )
}