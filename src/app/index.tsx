import { View, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
  <View style={styles.layout}>
    <Box />
  </View>
  );
}

export const Box = () => (
  /**
   * In React Native, we can apply multiple styles to a single component
   * by passing an array of style objects, StyleSheet references,
   * or a combination of both to the style prop. This approach is similar
   * to applying multiple CSS classes to an HTML element,
   * where each class contributes its own set of styles.
   *
   * When an array of styles is passed, React Native applies them from left to right,
   * with the rightmost styles taking precedence and overriding
   * any conflicting properties from earlier styles in the array.
   */
  <View style={[styles.box, { backgroundColor: 'blue' }]} />
);


export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});