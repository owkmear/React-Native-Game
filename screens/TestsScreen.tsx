import React from "react";
import { StyleSheet } from "react-native";
import Test from "../components/Test";
import { View } from "../components/Themed";
import { TestsProps } from "../types";

export default function TestsScreen(props: TestsProps) {
  return (
    <View style={styles.container}>
      <Test {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
