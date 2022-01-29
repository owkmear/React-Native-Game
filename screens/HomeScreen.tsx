import React from "react";
import { Button, StyleSheet, Image, Text } from "react-native";
import { View } from "../components/Themed";
import { HomeProps } from "../types";

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: "right",
            fontSize: 34,
            fontWeight: "bold",
            letterSpacing: 2,
            color: "#686868",
          }}
        >
          JavaScript
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontSize: 20,
            fontStyle: "italic",
            color: "#a5a5a5",
            lineHeight: 17,
          }}
        >
          тестирование
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 15,
        }}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.start}>
        <Button
          title="Начать"
          color="#2196f3"
          onPress={() => navigation.navigate("Tests")}
        />
      </View>
      <View>
        <Button
          title="Настройки"
          color="#2196f3"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  start: {
    paddingTop: 50,
    paddingBottom: 20,
  },
});
