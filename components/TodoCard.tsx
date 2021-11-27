import * as React from "react";
import { StyleProp, StyleSheet, Switch, ViewStyle } from "react-native";
import { Text, View } from "../components/Themed";
import { Todo } from "../types";
import { Button } from "./Button";

const cardStyles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 16
  }
});

interface TodoCardProps {
  style?: StyleProp<ViewStyle>;
  todo: Todo;
  onDelete?: (todoId: Todo["id"]) => void;
  onToggleIsDone?: (todoId: Todo["id"]) => void;
}

export function TodoCard({
  onDelete,
  onToggleIsDone,
  style,
  todo
}: TodoCardProps) {
  return (
    <View style={[cardStyles.container, style]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Switch
          value={todo.isDone}
          onValueChange={() => onToggleIsDone?.(todo.id)}
        />
        <Text style={cardStyles.title}>{todo.text}</Text>
      </View>
      <Button onPress={() => onDelete?.(todo.id)} color="#cc3030">
        Delete
      </Button>
    </View>
  );
}
