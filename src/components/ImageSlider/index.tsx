import React, { useRef, useState  } from 'react'
import { FlatList, ViewToken } from 'react-native'
import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles'

interface Props {
  imagesUrl: string[];
}
interface ImageChangeProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}
export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const imageChange = useRef((info: ImageChangeProps)=>{
     const currentIndex = info.viewableItems[0].index!

     setImageIndex(currentIndex)
  })

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_,index)=> <ImageIndex key={String(index)} active={index === imageIndex} />)}
      </ImageIndexes>

        <FlatList
        data={imagesUrl}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={imageChange.current}

        />
        

    </Container>
  )
}