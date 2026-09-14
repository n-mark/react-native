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


// Get the maximum width/height (in dp) from the Dimensions API
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  layout: {
    /**
     * To make layouts dynamic, we use the flex property.
     * This property allows child components to expand
     * or shrink to fill available space along the main axis.
     */
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
  },
});