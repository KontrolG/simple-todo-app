import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps, Todo } from "../types";
import { TodoCard } from "../components/TodoCard";
import { TodoCreator } from "../components/TodoCreator";

export default function TodoScreen({ navigation }: RootTabScreenProps<"Todo">) {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function addTodo(text: string) {
    setTodos([...todos, { text, isDone: false, id: Math.random().toString() }]);
  }

  function deleteTodo(deletedTodoId: string) {
    setTodos(todos.filter(({ id }) => id !== deletedTodoId));
  }

  function toggleTodoIsDone(todoId: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Create Todo</Text>
        <TodoCreator style={{ marginTop: 16 }} onSubmit={addTodo} />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Todos</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          paddingVertical: 16,
          paddingHorizontal: "5%"
        }}
      >
        {todos.map((todo, index) => (
          <TodoCard
            style={index > 0 ? { marginTop: 32 } : undefined}
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggleIsDone={toggleTodoIsDone}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 32
  },
  wrapper: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
