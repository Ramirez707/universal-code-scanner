import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/home.png')} style={styles.background}>

      <Link href="/qr-scanner" style={styles.link}>
      <AntDesign name="qrcode" size={100} color="black"/>
      </Link>
      <Text style={styles.text}>QR</Text>

      <Link href="/bar-scanner" style={styles.link}>
      <AntDesign name="barcode" size={100} color="black"/>
      </Link>
      <Text style={styles.text}>Barcode</Text>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    padding: 26,
    backgroundColor: 'rgba(230, 230, 230, 0.8)',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    width: 150,
    height: 150,
  }
})
