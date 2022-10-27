import React from "react";
import { Image, StyleSheet, Button, Text, View } from "react-native";
import { SettingsProps } from "../types";
import { Languages } from "../model";
import Colors from "../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  updateGrade,
  selectCurrentGrade,
  selectLanguage,
  updateLanguage,
} from "../store/questionsSlice";
import { gradesOptions, languagesOptions } from "../Utils";
import { useTranslation } from "react-i18next";

export default function SettingsScreen({ navigation }: SettingsProps) {
  const dispatch = useAppDispatch();
  const currentGrade = useAppSelector(selectCurrentGrade);
  const currentLanguage = useAppSelector(selectLanguage);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
    dispatch(updateLanguage(language));
  };

  const handlePressPrev = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: Colors.title,
            }}
          >
            {t("settings")}
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/settings.png")}
          />
        </View>
        <View style={styles.theme}>
          <Picker
            selectedValue={currentGrade}
            onValueChange={(itemValue, itemIndex) =>
              dispatch(updateGrade(itemValue))
            }
          >
            {gradesOptions.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.translate}>
          <Picker
            selectedValue={currentLanguage}
            onValueChange={changeLanguage}
          >
            {languagesOptions.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.answer}>
        <Button
          title={t("back")}
          onPress={handlePressPrev}
          color={Colors.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: Colors.background,
  },
  image: {
    width: 409,
    height: 212,
  },
  theme: {
    paddingTop: 30,
  },
  translate: {
    paddingTop: 30,
  },
  answer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
