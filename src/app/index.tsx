import { View, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.layout}>
      <BoxOne isActive='true' />
      <BoxTwo />
    </View>
  );
}

export const BoxOne = (props) => (
  /**
   * In this example, when the nightMode prop is true,
   * the background color is overridden to black;
   * otherwise, it remains blue. This approach is particularly useful
   * when we want to combine multiple base styles and selectively override
   * specific properties based on a condition.
   *
   * Another common technique for dynamic styling is using
   * the ternary operator to choose between two distinct style objects.
   * This is especially useful when the styling needs to be mutually exclusive,
   * such as toggling between a light and dark theme
   */
  <View style={[styles.redBox, props.isActive && styles.blueBox]} />
);

export const BoxTwo = (props) => (
  <View style={props.isActive ? styles.blueBox : styles.redBox} />
);

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  redBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "white",
  },

  blueBox: {
    width: 150,
    height: 150,
    backgroundColor: "blue",
  },
});