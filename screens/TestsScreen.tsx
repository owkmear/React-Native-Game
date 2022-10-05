import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useTranslation } from "react-i18next";
import Colors from "../constants/Colors";

import SyntaxHighlighter from "react-native-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

import { TitleText } from "../components/StyledText";
import { TestsProps } from "../types";
import {
  setAnswer,
  validateAnswerCombo,
  selectAnswer,
  selectQuestion,
  selectCurrentGrade,
} from "../store/questionsSlice";

export default function TestsScreen({ navigation }: TestsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const answer = useAppSelector(selectAnswer);
  const question = useAppSelector(selectQuestion);
  const currentGrade = useAppSelector(selectCurrentGrade);

  const handlePressNext = () => {
    dispatch(validateAnswerCombo());
    navigation.navigate("Result");
  };

  const handlePressPrev = () => {
    navigation.navigate("Home");
  };

  const choiceAnswer = (answer: number) => {
    dispatch(setAnswer(answer));
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.question}>
          <Text style={{ fontWeight: "bold", color: Colors.title }}>
            {t(`grade.${currentGrade}`)}
          </Text>
        </View>
        <View>
          <TitleText>{t(`themes.${question.theme}`)}</TitleText>
        </View>
        <View style={styles.question}>
          <Text style={{ fontStyle: "italic" }}>{question.question}</Text>
        </View>
        {question.code && (
          <View style={styles.code}>
            <SyntaxHighlighter
              language="javascript"
              style={prism}
              highlighter="prism"
              customStyle={styles.syntax}
              fontSize={14}
            >
              {question.code}
            </SyntaxHighlighter>
          </View>
        )}
        <View>
          {question.variants.map((variant: string, index: number) => (
            <View style={styles.variant} key={index}>
              <Button
                title={variant}
                color={
                  answer === index + 1
                    ? Colors.variant.selected
                    : Colors.variant.normal
                }
                onPress={() => {
                  choiceAnswer(index + 1);
                }}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.answer}>
        <Button
          title={t("back")}
          onPress={handlePressPrev}
          color={Colors.button}
        />
        <Button
          disabled={answer === null}
          title={t("to_answer")}
          onPress={handlePressNext}
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
  question: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  code: {
    paddingBottom: 20,
  },
  syntax: {
    margin: 0,
  },
  variant: {
    marginBottom: 10,
  },
  answer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
