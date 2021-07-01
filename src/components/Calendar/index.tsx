import React from 'react'
import {Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler} from 'react-native-calendars'
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components'
import { ptBR } from './locales';


interface DayProps{
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
interface MarkedDatesProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean
  }
}
interface CalendarProps{
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler

}


LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

 function Calendar({markedDates, onDayPress}: CalendarProps){

  const theme = useTheme()

  return (
    <CustomCalendar
    renderArrow={(direction)=>
      <Feather
      size={24}
      color={theme.colors.text}
      name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
      />
    }

    headerStyle={{
      backgroundColor: theme.colors.background_secondary,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.text_detail,
      paddingBottom: 10,
      marginBottom: 10
    }}
    theme={{
      textDayFontFamily: theme.fonts.primary_regular,
      textDayHeaderFontFamily: theme.fonts.primary_medium,
      textDayHeaderFontSize: 10,
      textMonthFontFamily: theme.fonts.secondary_semibold,
      textMonthFontSize: 20,
      monthTextColor: theme.colors.title,
      arrowStyle: {
        marginHorizontal: -15
      }
    }}

    firstDay={1}
    minDate={new Date()}
    markingType="period"
    markedDates={markedDates}
    onDayPress={onDayPress}
    />
  )
}

export {
  MarkedDatesProps,
  DayProps,
  Calendar
}