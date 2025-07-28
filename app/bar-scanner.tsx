import { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Linking, Platform, StatusBar } from 'react-native'
import { Link, Stack } from 'expo-router'
import { useCameraPermissions, CameraView } from 'expo-camera'
import { ThemedText } from '@/components/ThemedText'


export default function BarScan() {
  const [permission, requestPermission] = useCameraPermissions()
  const barcodeLock = useRef(false)

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission()
    }
  }, [permission])

  const handleScan = async ({ data }: { data: string }) => {
    if (!barcodeLock.current && data) {
      barcodeLock.current = true

      try {
        if (await Linking.canOpenURL(data)) {
          await Linking.openURL(data)
        } else {
          alert(`Scanned barcode data:\n${data}`)
        }
      } catch (err) {
        console.error('Failed to handle scanned data:', err)
        alert('Failed to open scanned data.')
      }

      setTimeout(() => {
        barcodeLock.current = false
      }, 2000)
    }
  }

  if (!permission?.granted) {
    return (
      <SafeAreaView style={styles.centered}>

        <Text style={styles.permissionText}>
          Camera permission is required to scan barcodes.
        </Text>

        <Link href="/">
          <ThemedText type="link">Back to Home page</ThemedText>
        </Link>

      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>

      <Stack.Screen options={{ title: 'Barcode Scanner', headerShown: false }}/>

      {Platform.OS === 'android' && <StatusBar hidden />}

      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </Link>

      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={handleScan}
        barcodeScannerSettings={{
          barcodeTypes: [
            'aztec',
            'ean13',
            'ean8',
            'pdf417',
            'upc_e',
            'upc_a',
            'datamatrix',
            'code39',
            'code93',
            'code128',
            'itf14',
            'codabar',
          ],
        }}
      />

      <View style={styles.overlay}>
        <View style={styles.frame}/>
        <Text style={styles.instructionText}>Align barcode within frame</Text>
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
    width: 300,
    height: 175,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 12,
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