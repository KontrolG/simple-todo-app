import * as React from "react";
import { StyleProp, TextInput, ViewStyle } from "react-native";
import { View } from "./Themed";
import { Button } from "./Button";

interface TodoCreatorProps {
  style?: StyleProp<ViewStyle>;
  onSubmit?: (value: string) => void;
}

export function TodoCreator({ onSubmit, style }: TodoCreatorProps) {
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit() {
    onSubmit?.(inputValue);
  }

  return (
    <View style={style}>
      <TextInput
        style={{
          marginBottom: 16,
          borderColor: "gray",
          borderRadius: 4,
          borderWidth: 1,
          paddingVertical: 8,
          paddingHorizontal: 16
        }}
        placeholder="Enter a todo"
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmit}
      />
      <Button onPress={handleSubmit}>Add</Button>
    </View>
  );
}
