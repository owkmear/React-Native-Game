import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../components/Themed";
import { HomeProps } from "../types";
import Colors from "../constants/Colors";
import { useTranslation } from "react-i18next";
import Button from "../components/nativeBase/Button";

export default function HomeScreen({ navigation }: HomeProps) {
  const { t } = useTranslation();
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
        />
      </View>
      <View>
        <Button
          title={t("settings")}
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
    width: 320,
    height: 426,
  },
  start: {
    paddingTop: 50,
    paddingBottom: 20,
  },
});
