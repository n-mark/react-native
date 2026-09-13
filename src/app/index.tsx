import { View, Text, Image } from 'react-native';


export default function HomeScreen() {
  return (
    /**
     * Let’s look at two components that are found in the majority of mobile interfaces: <Text> and <Image>
     *
     * The <Text> component is React Native’s way of rendering text.
     * Unlike in web development, where text can be placed directly inside any element,
     * in React Native, all text must be wrapped in a <Text> component
     *
     * The <Text> component supports numerous props
     *
     * The <Image> component displays images from various sources—local assets,
     * network resources, or even base64 encoded data.
     * It requires explicit width and height dimensions to render properly
     */
    <View>
      <Text>Welcome to My App!</Text>
      <Image source={require('../../assets/images/beer.jpeg')}
        style={{ height: 200, width: 200 }} />
    </View>
  );
}
