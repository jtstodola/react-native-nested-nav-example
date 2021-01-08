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
      <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(currentEnthusiasmLevel || 0)}
      </Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={onDecrement}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="+"
            onPress={onIncrement}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  )
}

export default Hello
