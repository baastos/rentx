import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BackButton } from '../../components/BackButton'
import { Car } from '../../components/Car'
import { Loading } from '../../components/Loading'
import CarDTO from '../../dtos/carDTO'
import api from '../../services/api'
import { Container, Header, Title, Description, Content, ContentHeader, Text, Quantity, MyCarsList } from './styles'

interface MyCars{
  user_id: number;
  startDate: string;
  endDate: string;
  car: CarDTO;
  id: number;
}

export function MyCars(){
  const [myCars,setMyCars] = useState<MyCars[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  function handleBack(){
    navigation.goBack()
  }

  useEffect(()=>{
    async function fetchCars(){
      try {
        const response = await api.get('schedules_byuser?user_id=1')

        setMyCars(response.data)

      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false)
      }
    }
    fetchCars()
  },[])


  return (
    <Container>
        <Header>
        <BackButton onPress={handleBack} />
        <Title>
          Seus agendamentos,{"\n"}
          estão aqui.
        </Title>
        <Description>Conforto, segurança e praticidade.</Description>
        
      </Header>
      <Content>
        <ContentHeader>
          <Text>Agendamentos feitos</Text>
          <Quantity>{myCars.length}</Quantity>
        </ContentHeader>
       {loading ? <Loading/> : <MyCarsList
        data={myCars}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Car myCars startDate={item.startDate} endDate={item.endDate} data={item.car} />} 
        /> } 
      </Content>
    </Container>
  )
}