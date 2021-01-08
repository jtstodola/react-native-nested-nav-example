import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles'

export interface HelloProps {
  name: string
  enthusiasmLevel?: number
}

const Hello: React.FC<HelloProps> = ({ name, enthusiasmLevel }) => {
  const [currentEnthusiasmLevel, setEnthusiasmLevel] = useState(enthusiasmLevel)

  const onIncrement = () =>
    setEnthusiasmLevel((currentEnthusiasmLevel || 0) + 1)
  const onDecrement = () =>
    setEnthusiasmLevel((currentEnthusiasmLevel || 0) - 1)

  const getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!')
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Hello World!</Text>
    </View>
  )
}

export default Hello
