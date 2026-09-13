import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function HomeScreen() {
  /**
   * React Hooks like the useState and useEffect functions identically in React Native.
   */
  const [username, setUsername] = useState('');

  return (
    <View>
      <TextInput value={username} onChangeText={(value) => setUsername(value)}/>

{/* Component composition, props passing,
conditional rendering, and lists also work the same way. */}
      <Text>{username === '' ? 'Please enter your name' : `Welcome, ${username}!`}</Text>
    </View>
  );
}
