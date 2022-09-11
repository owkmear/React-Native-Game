import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import { NotFoundProps } from "../types";
import Colors from "../constants/Colors";

export default function NotFoundScreen({ navigation }: NotFoundProps) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("page_not_found")}</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
        style={styles.link}
      >
        <Text style={styles.linkText}>{t("back_to_menu")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: Colors.link,
  },
});
