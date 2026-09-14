import { View, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.layout}>
      <View style={styles.card} />
      <View style={styles.card} />
    </View>
  );
}

/**
 * With the StyleSheet API, we can write our styling rules
 * separately and reference them when rendering the components.
 * These function similarly to CSS Stylesheets and allow styling
 * rules to be reused for multiple components.
 *
 * With the StyleSheet API, we can pull the inline styling
 * from our <AwesomeBox> component. Doing that allows us to
 * reuse the styling rules and keep our <AwesomeBox> component readable.
 */
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center'
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 }
  }
});