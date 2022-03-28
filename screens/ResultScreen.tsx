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
import {
  nextQuestion,
  selectCorrect,
  selectExplanation,
  selectCorrectAnswerImage,
  selectWrongAnswerImage,
} from "../store/questionsSlice";
import GestureRecognizer from "react-native-swipe-gestures";
import { useDispatch, useSelector } from "react-redux";

const window = Dimensions.get("window");

export default function ResultScreen({ navigation }: ResultProps) {
  const dispatch = useDispatch();
  const explanation = useSelector(selectExplanation);
  const correct = useSelector(selectCorrect);
  const correctImage = useSelector(selectCorrectAnswerImage);
  const wrongImage = useSelector(selectWrongAnswerImage);

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
            {correct ? (
              <Image
                style={[
                  styles.image,
                  {
                    width: window.width,
                    height:
                      (correctImage.height / correctImage.width) * window.width,
                  },
                ]}
                resizeMode={"cover"}
                source={correctImage.source}
              />
            ) : (
              <Image
                style={[
                  styles.image,
                  {
                    width: window.width,
                    height:
                      (wrongImage.height / wrongImage.width) * window.width,
                  },
                ]}
                resizeMode={"cover"}
                source={wrongImage.source}
              />
            )}
          </View>
          <Text style={styles.text}>{explanation}</Text>
        </ScrollView>
      </SafeAreaView>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: window.width,
    height: window.height,
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
});
