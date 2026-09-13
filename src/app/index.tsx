import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

interface Form {
  name: string;
  surname: string;
  email: string;
}

export default function HomeScreen() {
  const [form, setForm] = useState<Form>({
    name: '',
    surname: '',
    email: ''
  });

  const [displayForm, setDisplayForm] = useState<Form>({
    name: '',
    surname: '',
    email: ''
  });

  const handleChange = (field: keyof Form, value: string | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const copyToDisplay = (newForm: Form) => {
    setDisplayForm(newForm)
  }

  return (
    <View>
      <View style={{ padding: 60 }}>
        <Text style={styles.title}>INFO</Text>
        <Text>Name: {displayForm.name}</Text>
        <Text>Surname: {displayForm.surname}</Text>
        <Text>Email: {displayForm.email}</Text>
      </View>
      <View style={{ padding: 60 }}>
        <Text style={styles.title}>Please tell us about you</Text>
        <TextInput placeholder='Enter your name' onChangeText={(value) => handleChange('name', value)} />
        <TextInput placeholder='Enter your surname' onChangeText={(value) => handleChange('surname', value)} />
        <TextInput placeholder='Enter your email' onChangeText={(value) => handleChange('email', value)} />
        <Button title="Submit" onPress={() => copyToDisplay(form)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
});
