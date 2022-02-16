import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "../components/Themed";
import { SettingsProps } from "../types";
import Colors from "../constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { setGrade, selectCurrentGrade } from "../store/questionsSlice";
import { gradesOptions } from "../Utils";

export default function SettingsScreen({ navigation }: SettingsProps) {
  const dispatch = useDispatch();
  const currentGrade = useSelector(selectCurrentGrade);

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
            Настройки
          </Text>
        </View>
        <View style={styles.theme}>
          <Picker
            selectedValue={currentGrade}
            onValueChange={(itemValue, itemIndex) =>
              dispatch(setGrade(itemValue))
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
      </View>

      <View style={styles.answer}>
        <Button
          title="Назад"
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
  theme: {
    paddingTop: 30,
  },
  answer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
