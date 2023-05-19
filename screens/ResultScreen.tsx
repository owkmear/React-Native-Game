import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  View
} from "react-native";
import MarkdownDisplay from "@flowchase/react-native-markdown-display";
import { ResultProps } from "../types";
import Colors from "../constants/Colors";
import {
  nextQuestion,
  selectCorrect,
  selectExplanation,
} from "../store/questionsSlice";
import { selectCorrectImage, selectWrongImage } from "../store/imagesSlice";
import GestureRecognizer from "react-native-swipe-gestures";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const window = Dimensions.get("window");

export default function ResultScreen({ navigation }: ResultProps) {
  const dispatch = useAppDispatch();
  const explanation = useAppSelector(selectExplanation);
  const correct = useAppSelector(selectCorrect);
  const correctImage = useAppSelector(selectCorrectImage);
  const wrongImage = useAppSelector(selectWrongImage);

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
          <View style={styles.markdown}>
            <MarkdownDisplay style={markdownStyles}>
              {explanation}
            </MarkdownDisplay>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.background,
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: window.width,
    height: window.height,
  },
  markdown: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const markdownStyles = StyleSheet.create({
  code_inline: {
    textShadowRadius: 3,
    textShadowColor: "#616161",
    backgroundColor: "#f1eeee",
  },
  body: {
    fontSize: 16,
    lineHeight: 25,
    backgroundColor: "white",
  },
});
