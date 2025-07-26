import { StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <AntDesign name="qrcode" size={320} color="green" style={styles.headerImage}/>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About</ThemedText>
      </ThemedView>
      <ThemedText style={styles.text}>Welcome to my Universal Code Scanner!</ThemedText>
      <Collapsible title="Purpose of this app">
        <ThemedText style={styles.collapseText}>
          This app is capable of scanning both QR codes and barcodes, making it a versatile tool for various scanning needs.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Author">
          <ThemedText style={styles.collapseText}>
            Alex Ramirez
        </ThemedText>
        <ExternalLink href="https://github.com/Ramirez707">
          <ThemedText type="link">GitHub</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/alex-ramirez-dev">
          <ThemedText type="link">LinkedIn</ThemedText>
        </ExternalLink>
      </Collapsible>
      <AntDesign name="barcode" size={400} color="green" style={styles.text}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    alignSelf: 'center',
  },
  titleContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'SpaceMono'
  },
  collapseText: {
    fontFamily: 'SpaceMono',
    marginTop: 10,
  }
});