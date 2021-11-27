import * as React from "react";
import { Button as BaseButton, ButtonProps } from "react-native";

interface Props extends Omit<ButtonProps, "title"> {
  children: ButtonProps["title"];
}

export function Button({ children, ...props }: Props) {
  return <BaseButton title={children} {...props} />;
}
