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