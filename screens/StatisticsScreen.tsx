import React from "react";
import { Image, StyleSheet, Button, Text, View } from "react-native";
import { StatisticsProps } from "../types";
import Colors from "../constants/Colors";
import { useAppSelector } from "../hooks/redux";
import {
  selectCorrect,
  selectTotal,
  selectWrong,
  selectRank,
} from "../store/statisticsSlice";
import { useTranslation } from "react-i18next";

export default function StatisticsScreen({ navigation }: StatisticsProps) {
  const total = useAppSelector(selectTotal);
  const correct = useAppSelector(selectCorrect);
  const wrong = useAppSelector(selectWrong);
  const rank = useAppSelector(selectRank);

  const { t } = useTranslation();

  const handlePressPrev = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: Colors.title,
            }}
          >
            {t("statistics")}
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
            source={require("../assets/images/statistics.png")}
          />
        </View>

        <View style={styles.rank}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: Colors.title,
            }}
          >
            {t(`rank.${rank}`)}
            {wrong}
          </Text>
        </View>

        <View style={styles.total}>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {t("total_answers")}
            {total}
          </Text>
        </View>

        <View style={styles.correct}>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {t("correct_answers")}
            {correct}
          </Text>
        </View>

        <View style={styles.wrong}>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {t("wrong_answers")}
            {wrong}
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
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
  header: {},
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  correct: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  wrong: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  rank: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
