import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text, Button } from "../components/Themed";
import { HomeProps } from "../types";
import Colors from "../constants/Colors";

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <View>
        <Text
          style={{
            textAlign: "right",
            fontSize: 34,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
          lightColor={Colors.light.title}
          darkColor={Colors.dark.title}
        >
          JavaScript
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontSize: 20,
            fontStyle: "italic",
            lineHeight: 17,
          }}
          lightColor={Colors.light.subTitle}
          darkColor={Colors.dark.subTitle}
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
          onPress={() => navigation.navigate("Tests")}
          lightColor={Colors.light.button}
          darkColor={Colors.dark.button}
        />
      </View>
      <View>
        <Button
          title="Настройки"
          onPress={() => navigation.navigate("Settings")}
          lightColor={Colors.light.button}
          darkColor={Colors.dark.button}
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
