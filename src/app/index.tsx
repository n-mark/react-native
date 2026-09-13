import { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { TestDataButton } from "../components/TestDataButton";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = (): void => {
    if (todoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: todoText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setTodoText('');
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <View>
      <View>
        <Text>My TODO list</Text>
        <TextInput value={todoText} onChangeText={(value) => setTodoText(value)} placeholder='Enter a new TODO'></TextInput>
        <Button title='add TODO' onPress={() => addTodo()}></Button>
        <TestDataButton onAddTestData={setTodos} />
      </View>

      <View>
        <Text>TASKS</Text>
        <ScrollView style={{ height: 400 }}>
          {todos.length > 0 ? todos.map((item, idx) => (
            <View key={item.id}>
              <Text onPress={() => toggleTodo(item.id)}>{item.completed ? '✅' : '▶️'} {item.text}</Text>
            </View>
          )) : <Text>No TODOs yet. Add one above!</Text>}
        </ScrollView>
      </View>

      <View>
        <Text>{todos.length > 0 ? `TOTAL: ${todos.length}` : ''}</Text>
        <Text>{todos.filter(e => e.completed).length > 0 ? `COMPLETED: ${todos.filter(e => e.completed).length}` : ''}</Text>

      </View>
    </View>
  );
}