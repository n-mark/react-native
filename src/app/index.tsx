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

// Flexbox also allows us to control how the child elements
// are positioned within our parent flexbox. The property to control
// this aspect is the justifyContent property. We have already used
// this property’s center value in previous exercises.

// Besides center, there are five more options available.
// The options flex-start and flex-end are related to the parent flexbox.
// They both mean: “position the child elements where the parent flexbox starts or ends”.
// The other options space-around, space-between, and space-evenly are related
// to where gaps should be placed between the child elements.

// center renders child elements within the center of our parent flexbox.
// flex-start renders child elements at the start of our parent flexbox.
// flex-end renders child elements at the end of our parent flexbox.
// space-around renders child elements with remaining space around these elements.
// space-between renders child elements with remaining space between the elements, without space at the start or end.
// space-evenly renders child elements with remaining space evenly divided, including space at the start and end.
export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    justifyContent: "space-evenly"
  },
  box: {
    backgroundColor: "black",
    height: 100
  },
});
