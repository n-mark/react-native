import { View, Text, Image, TextInput, ScrollView, Button, Alert } from 'react-native';

const food = [
  'Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi',
  'Tacos', 'Sandwich', 'Ramen', 'Chicken',
  'Fish', 'Rice', 'Noodles', 'Soup', 'Bread',
  'Cheese', 'Eggs', 'Pancakes', 'Waffles'
];

export default function HomeScreen() {
  return (
    <View>

  {/* The <TextInput> component allows users to enter text,
  similar to an HTML input or textarea.
  It captures user input and can update the state as the user types */}
      <TextInput placeholder='Enter your name' />

  {/* The <ScrollView> component provides a scrollable container when
  content exceeds the screen size, think of a social media feed!
  Unlike <View>, which shows a fixed area, <ScrollView> allows users to scroll
  through long lists, images, or text content */}
      <ScrollView style={{ height: 100 }}>
        {food.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>

{/* The <Button> component provides a standard button that users can tap.
  When pressed, we can link it to functions that perform actions like sending data,
  navigating screens, or showing alerts: */}
    <Button
      title="Press me"
      onPress={() => Alert.alert('Button pressed!')}
    />
    </View>
  );
}
