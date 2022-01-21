import { StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

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

      <View
        style={{
          marginTop: 10,
          marginBottom: 15,
          backgroundColor: "#f1f1f1",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#3b38d9" }}>{question.code}</Text>
      </View>

      <View>
        <View style={styles.variant}>
          <Button
            title="ReferrenceError: arguments is not defined"
            color="#2196f3"
            onPress={() => {}}
          />
        </View>
        <View style={styles.variant}>
          <Button title="333" color="#2196f3" onPress={() => {}} />
        </View>
        <View style={styles.variant}>
          <Button title="111" color="#2196f3" onPress={() => {}} />
        </View>
        <View style={styles.variant}>
          <Button title="222" color="#2196f3" onPress={() => {}} />
        </View>
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
