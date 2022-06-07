import React from "react";
import { Image, StyleSheet } from "react-native";
import Dropdown from "../components/nativeBase/Dropdown";
import ButtonComponent from "../components/nativeBase/Button";
import TextComponent from "../components/nativeBase/Text";
import VStackComponent from "../components/nativeBase/VStack";
import SliderComponent from "../components/nativeBase/Slider";
import TextAreaComponent from "../components/nativeBase/TextArea";
import { Button, Text, View } from "../components/Themed";
import { SettingsProps } from "../types";
import { Languages, Grades } from "../model";
import Colors from "../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setGrade,
  selectCurrentGrade,
  selectLanguage,
  setLanguage,
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
    dispatch(setLanguage(language));
  };

  const changeGrade = (grade: Grades) => {
    dispatch(setGrade(grade));
  };

  const handlePressPrev = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}
    >
      <View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
            }}
            lightColor={Colors.light.title}
            darkColor={Colors.dark.title}
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
          <Dropdown
            selectedValue={currentGrade}
            onValueChange={changeGrade}
            options={gradesOptions}
          />
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

        <View style={{ height: 10 }}>
          <ButtonComponent />
        </View>

        <View style={{ height: 10, marginBottom: 40, marginTop: 40 }}>
          <TextComponent />
        </View>

        <View style={{ height: 10, marginBottom: 40, marginTop: 40 }}>
          <VStackComponent />
        </View>

        <View style={{ height: 10, marginBottom: 40, marginTop: 40 }}>
          <SliderComponent />
        </View>

        <View style={{ height: 10, marginBottom: 40, marginTop: 40 }}>
          <TextAreaComponent />
        </View>
      </View>

      <View style={styles.answer}>
        <Button
          title={t("back")}
          onPress={handlePressPrev}
          lightColor={Colors.light.button}
          darkColor={Colors.dark.button}
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
