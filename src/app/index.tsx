import { View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    /**
     * In mobile development, views are the foundational UI containers
     * that help structure the screen. In React Native, the <View> component
     * serves a similar role—it acts as a wrapper for other UI elements,
     * allowing us to organize content and layouts effectively.
     *
     * The <View> component functions similarly to a <div> in web development
     * but renders native UI containers instead of HTML elements.
     * Just as a <div> helps structure a web page, a <View> is used to structure
     * the layout of a mobile screen.
     *
     * Views typically contain:
          Other <View> components for nested layouts
          Text components for displaying text
          Image components for displaying images
          Input components like buttons or text inputs
          Custom components we build ourselves
     */
    <View>
      <Text>This is a demo text!</Text>
    </View>
  );
}
