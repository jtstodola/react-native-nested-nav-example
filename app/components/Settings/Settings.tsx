import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from './styles'

export interface HelloProps {
  name: string
  enthusiasmLevel?: number
}

const Home: React.FC<HelloProps> = ({ name, enthusiasmLevel }) => {
  return (
    <View>
      <Text>Welcome Home!</Text>
    </View>
  )
}

export default Home
