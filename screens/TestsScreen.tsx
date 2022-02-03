import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// @ts-ignore
import SyntaxHighlighter from "react-native-syntax-highlighter";
// @ts-ignore
import { prism, dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { TitleText } from "../components/StyledText";
import { Text, View, Button } from "../components/Themed";
import { TestsProps } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function TestsScreen({ navigation }: TestsProps) {
  const [answer, setAnswer] = useState<number | null>(null);
  const { questionNumber } = useSelector((state: any) => state.questions);
  const question = useSelector(
    (state: any) => state.questions.questions.questions[questionNumber]
  );
  const theme = useColorScheme();

  const handlePressNext = () => {
    setAnswer(null);
    navigation.navigate("Result");
  };

  const handlePressPrev = () => {
    navigation.navigate("Home");
  };

  const choiceAnswer = (answer: number) => {
    setAnswer(answer);
  };

  return (
    <View style={styles.container}>
      <View>
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
                color={answer === index ? "#bec11a" : "#2196f3"}
                onPress={() => {
                  choiceAnswer(index);
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
