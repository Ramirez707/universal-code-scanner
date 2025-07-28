import { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Linking, Platform, StatusBar } from 'react-native'
import { Link, Stack } from 'expo-router'
import { useCameraPermissions, CameraView } from 'expo-camera'
import { ThemedText } from '@/components/ThemedText'


export default function QrScan() {
  const [permission, requestPermission] = useCameraPermissions()
  const qrLock = useRef(false)

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission()
    }
  }, [permission])

  const handleScan = async ({ data }: { data: string }) => {
    if (!qrLock.current && data) {
      qrLock.current = true

      try {
        if (await Linking.canOpenURL(data)) {
          await Linking.openURL(data)
        } else {
          alert(`Scanned QR data:\n${data}`)
        }
      } catch (err) {
        console.error('Failed to open URL:', err)
        alert('Failed to open scanned data.')
      }

      setTimeout(() => {
        qrLock.current = false
      }, 2000)
    }
  }

  if (!permission?.granted) {
    return (
      <SafeAreaView style={styles.centered}>

        <Text style={styles.permissionText}>
          Camera permission is required to scan QR codes.
        </Text>

        <Link href="/">
          <ThemedText type="link">Back to Home page</ThemedText>
        </Link>
        
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      
      <Stack.Screen options={{ title: 'QR Scanner', headerShown: false }}/>

      {Platform.OS === 'android' && <StatusBar hidden />}

      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </Link>

      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={handleScan}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
      />

      <View style={styles.overlay}>
        <View style={styles.frame} />
        <Text style={styles.instructionText}>Align QR code within frame</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  permissionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
    borderColor: 'green',
    borderWidth: 4,
  },
  instructionText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    borderRadius: 8,
    zIndex: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
})