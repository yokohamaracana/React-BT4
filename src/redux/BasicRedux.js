import React from 'react'
import { View, Text, SafeAreaView, TextInput, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

export default function BasicRedux() {
 
    const useReducer = (state = 0, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + action.payload;
            case "DECREMENT":
                return state - action.payload;
            default:
                return state;
        }
    }
    const count = useSelector(state => state.useReducer)   
    const dispatch = useDispatch()
  return (
    <SafeAreaView style={{ paddingTop: '50%', }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button title="increment"  onPress={() => dispatch({
                                type: "INCREMENT",
                                payload: 1})} />
        <Button title="Sign in" onPress={() => dispatch({
                                type: "INCREMENT",
                                payload: 1
                            })} />
        </View>
      </View>
    </SafeAreaView>
  )
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
      marginBottom: "10%"
    }
  
  });