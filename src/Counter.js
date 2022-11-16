import React from 'react'
import { useState } from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { update, increment } from './redux/slices/counterSlice'

export function Counter() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const count = useSelector(state => state.counter.value)   
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{ paddingTop: '50%', }}>
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput style={styles.input}
          placeholder="Color"
          value={color}
          onChangeText={setColor}
        />
        
        <View style={styles.buttonContainer}>
        <Button title="increment"  onPress={() => dispatch(increment())} />
        <Button title="Sign in" onPress={() => dispatch(update({
                                'name': name,
                                'color': color,
                            }))} />
        <Text style={styles.text}>Name: {count.name}</Text>
        <Text style={styles.text}>Color: {count.color}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },

  input: {
    fontSize: 18,
    width: '100%',
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#FF4500',
  },

  button: {
  },

  buttonContainer: {
    width: 120,
    height: 40,
    marginBottom: "10%",
    borderRadius: 1
  }
});