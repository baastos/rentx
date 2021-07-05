import React from 'react'
import { StatusBar } from 'react-native'
import { CarList, Container, Header, HeaderContent, TotalCarsText, MyCarsButton } from './styles'
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Loading } from '../../components/Loading'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import CarDTO from '../../dtos/carDTO'
import api from '../../services/api'
import { Ionicons } from '@expo/vector-icons'
import theme from '../../styles/theme'

export function Home() {

  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  
  const navigation = useNavigation()
  function handleNavigate(route: string, car?: CarDTO){
    navigation.navigate(route, { car })
  }

  useEffect(()=>{
    async function fetchCars(){
      
      try {
        const response = await api.get('/cars')
        setCars(response.data)

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
      
    }
    fetchCars()
  },[])

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo />
          <TotalCarsText>Total de 12 carros</TotalCarsText>
        </HeaderContent>
      </Header>
      {loading ? <Loading/> :  <CarList data={cars} keyExtractor={item => item.id} renderItem={({ item }) => <Car onPress={()=> handleNavigate('CarDetails', item)}  data={item} />} />}
      <MyCarsButton onPress={()=> handleNavigate('MyCars')}>
        <Ionicons color={theme.colors.shape} name="car-sport" size={30}/>
      </MyCarsButton>
    </Container>

  )
}