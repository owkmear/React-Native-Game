import React from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import { HomeProps } from "../types";
import Colors from "../constants/Colors";
import { useTranslation } from "react-i18next";

export default function HomeScreen({ navigation }: HomeProps) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: "right",
            fontSize: 34,
            fontWeight: "bold",
            letterSpacing: 2,
            color: Colors.title,
          }}
        >
          JavaScript
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontSize: 20,
            fontStyle: "italic",
            lineHeight: 17,
            color: Colors.subTitle,
          }}
        >
          {t("testing")}
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
          title={t("start")}
          onPress={() => navigation.navigate("Tests")}
          color={Colors.button}
        />
      </View>
      <View>
        <Button
          title={t("settings")}
          onPress={() => navigation.navigate("Settings")}
          color={Colors.button}
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
    backgroundColor: Colors.background,
  },
  logo: {
    width: 320,
    height: 426,
  },
  start: {
    paddingTop: 50,
    paddingBottom: 20,
  },
});
