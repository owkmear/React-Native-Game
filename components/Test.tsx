import { StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore
import SyntaxHighlighter from "react-native-syntax-highlighter";
// @ts-ignore
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

import { TitleText, Separator } from "./StyledText";
import { Text, View } from "./Themed";
import { nextQuestion, prevQuestion } from "../store/questionsSlice";

export default function Test() {
  const dispatch = useDispatch();
  const { questionNumber } = useSelector((state: any) => state.questions);
  const question = useSelector(
    (state: any) => state.questions.questions.questions[questionNumber]
  );

  const handlePressNext = () => {
    dispatch(nextQuestion());
  };

  const handlePressPrev = () => {
    dispatch(prevQuestion());
  };

  return (
    <View>
      <View>
        <TitleText>{question.theme}</TitleText>
      </View>
      <View>
        <Text style={{ fontSize: 20 }}>Вопрос {questionNumber} из 20</Text>
      </View>
      <Separator />
      <View>
        <Text style={{ fontStyle: "italic" }}>{question.question}</Text>
      </View>
      <SyntaxHighlighter
        language="javascript"
        style={prism}
        highlighter="prism"
        customStyle={{ padding: 5, margin: 0 }}
        fontSize={14}
      >
        {question.code}
      </SyntaxHighlighter>
      <View>
        {question.variants.map((variant: string) => (
          <View style={styles.variant}>
            <Button title={variant} color="#2196f3" onPress={() => {}} />
          </View>
        ))}
      </View>
      <View style={styles.answer}>
        <Button title="Назад" color="#f194ff" onPress={handlePressPrev} />
        <Button title="Ответить" color="#f194ff" onPress={handlePressNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
