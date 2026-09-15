import { View, StyleSheet, Dimensions } from 'react-native';


export default function HomeScreen() {
  return (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
  </View>
  );
}

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'black',
    height: 100,
    width: 100,
  },
});
