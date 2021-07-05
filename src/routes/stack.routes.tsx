import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Appointments } from '../screens/Appointments';
import { AppointmentsCreated } from '../screens/AppointmentsCreated';
import { AppointmentsDetails } from '../screens/AppointmentsDetails';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

const Stack = createStackNavigator();


export function StackRoutes(){

  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="MyCars" component={MyCars}/>
      <Stack.Screen name="CarDetails" component={CarDetails}/>
      <Stack.Screen name="Appointments" component={Appointments}/>
      <Stack.Screen name="AppointmentsDetails" component={AppointmentsDetails}/>
      <Stack.Screen name="AppointmentsCreated" component={AppointmentsCreated}/>
    </Stack.Navigator>
  )
}