import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import SyntaxHighlighter from "react-native-syntax-highlighter";
import { prism, dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { TitleText } from "../components/StyledText";
import { Text, View, Button } from "../components/Themed";
import { TestsProps } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  setAnswer,
  validateAnswer,
  selectAnswer,
  selectQuestion,
  selectCurrentGrade,
} from "../store/questionsSlice";

export default function TestsScreen({ navigation }: TestsProps) {
  const dispatch = useDispatch();
  const answer = useSelector(selectAnswer);
  const question = useSelector(selectQuestion);
  const currentGrade = useSelector(selectCurrentGrade);
  const theme = useColorScheme();

  const handlePressNext = () => {
    dispatch(validateAnswer());
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
          <Text
            style={{ fontWeight: "bold", color: "#787878" }}
          >{`Уровень: ${currentGrade}`}</Text>
        </View>
        <View>
          <TitleText>{question.theme}</TitleText>
        </View>
        <View style={styles.question}>
          <Text style={{ fontStyle: "italic" }}>{question.question}</Text>
        </View>
        <View style={styles.code}>
          <SyntaxHighlighter
            language="javascript"
            style={theme === "dark" ? dark : prism}
            highlighter="prism"
            customStyle={styles.syntax}
            fontSize={14}
          >
            {question.code}
          </SyntaxHighlighter>
        </View>
        <View>
          {question.variants.map((variant: string, index: number) => (
            <View style={styles.variant} key={index}>
              <Button
                title={variant}
                color={answer === index + 1 ? "#bec11a" : "#2196f3"}
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
          title="Назад"
          onPress={handlePressPrev}
          lightColor={Colors.light.button}
          darkColor={Colors.dark.button}
        />
        <Button
          disabled={answer === null}
          title="Ответить"
          onPress={handlePressNext}
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
