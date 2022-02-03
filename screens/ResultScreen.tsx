import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { View, Text } from "../components/Themed";
import { ResultProps } from "../types";
import { nextQuestion } from "../store/questionsSlice";
import GestureRecognizer from "react-native-swipe-gestures";
import { useDispatch, useSelector } from "react-redux";

export default function ResultScreen({ navigation }: ResultProps) {
  const dispatch = useDispatch();
  const { questionNumber } = useSelector((state: any) => state.questions);
  const explanation = useSelector(
    (state: any) =>
      state.questions.questions.questions[questionNumber].explanation
  );

  const onSwipeLeft = () => {
    dispatch(nextQuestion());
    navigation.navigate("Tests");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft()}
      config={config}
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={require("../assets/images/correct.jpeg")}
            />
          </View>
          <Text style={styles.text}>{explanation}</Text>
        </ScrollView>
      </SafeAreaView>
    </GestureRecognizer>
  );
}

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: win.width,
    height: win.height,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});
