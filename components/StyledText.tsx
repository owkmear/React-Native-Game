import React from "react";
import { Text, TextProps, View } from "react-native";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function TitleText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontSize: 20, fontWeight: "bold" }]}
    />
  );
}

export function Separator() {
  return (
    <View
      style={{
        marginVertical: 30,
        height: 1,
        width: "80%",
        backgroundColor: "#eee",
      }}
    />
  );
}
