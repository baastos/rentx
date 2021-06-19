import React from 'react'
import { Button } from './styles'
import { MaterialIcons as Icon } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

interface BackButtonProps extends BorderlessButtonProps {
  color?: string
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  const theme = useTheme()

  return (
    <Button {...rest}>
      <Icon size={24} name="chevron-left" color={color ? color : theme.colors.background_secondary} />
    </Button>
  )
}