import { useState } from "react";
import { StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore
import SyntaxHighlighter from "react-native-syntax-highlighter";
// @ts-ignore
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

import { TitleText, Separator } from "./StyledText";
import { Text, View } from "./Themed";
import { nextQuestion } from "../store/questionsSlice";
import { TestsProps } from "../types";

export default function Test({ navigation }: TestsProps) {
  const [answer, setAnswer] = useState<number | null>(null);
  const dispatch = useDispatch();
  const { questionNumber } = useSelector((state: any) => state.questions);
  const question = useSelector(
    (state: any) => state.questions.questions.questions[questionNumber]
  );

  const handlePressNext = () => {
    dispatch(nextQuestion());
    setAnswer(null);
  };

  const handlePressPrev = () => {
    navigation.navigate("Home");
  };

  const choiceAnswer = (answer: number) => {
    setAnswer(answer);
  };

  return (
    <View>
      <View>
        <TitleText>{question.theme}</TitleText>
      </View>
      <Separator />
      <View style={styles.question}>
        <Text style={{ fontStyle: "italic" }}>{question.question}</Text>
      </View>
      <View style={styles.code}>
        <SyntaxHighlighter
          language="javascript"
          style={prism}
          highlighter="prism"
          customStyle={{ padding: 5, margin: 0 }}
          fontSize={14}
        >
          {question.code}
        </SyntaxHighlighter>
      </View>
      <View>
        {question.variants.map((variant: string, index: number) => (
          <View style={styles.variant}>
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
      <View style={styles.answer}>
        <Button title="Назад" color="#f194ff" onPress={handlePressPrev} />
        <Button
          disabled={answer === null}
          title="Ответить"
          color="#f194ff"
          onPress={handlePressNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    marginBottom: 10,
  },
  code: {
    marginBottom: 20,
  },
  variant: {
    marginBottom: 10,
  },
  control: {
    marginBottom: 10,
  },
  answer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
