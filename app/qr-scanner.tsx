import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function QrScan() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Scanner - PLACEHOLDER</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})