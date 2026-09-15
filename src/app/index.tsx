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

// After exploring how justifyContent controls the alignment of child elements
// along the main axis of a flex container, let’s turn our attention to another
// powerful Flexbox property: alignItems.

// The alignItems property determines how children are aligned along the cross axis
// of a container—the axis perpendicular to the main axis, which is set by the flexDirection property.
// For example, if our main axis runs horizontally (flexDirection: 'row'), the cross axis runs vertically, and vice versa.

// Here are the options available for alignItems:

// stretch (default): stretches children to fill the container along the cross-axis
// flex-start: aligns children to the start of the cross-axis
// flex-end: aligns children to the end of the cross-axis
// center: aligns children in the center of the cross-axis
// baseline: Aligns children along a common baseline, which is especially useful when working
// with text or components of varying heights. Individual children can be set to define
// the reference baseline for their parents.
// By adjusting alignItems, we can control our components’ vertical or horizontal alignment
// (depending on the flex direction), making our layouts more flexible and enabling us to keep things visually balanced.
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
