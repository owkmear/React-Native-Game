import * as WebBrowser from "expo-web-browser";
import { StyleSheet, Button, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText, TitleText, Separator } from "./StyledText";
import { Text, View } from "./Themed";

export default function Test() {
  return (
    <View>
      <View>
        <TitleText>Продвинутые концепции языка</TitleText>
      </View>

      <View>
        <Text style={{ fontSize: 20 }}>Вопрос 9 из 20</Text>
      </View>

      <Separator />

      <View>
        <Text style={{ fontStyle: "italic" }}>
          Что будет выведено в консоль в результате выполнения данного кода?
        </Text>
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
        <Text style={{ color: "#3b38d9" }}>console.log(foo(333));</Text>
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
        <Button title="Ответить" color="#f194ff" onPress={() => {}} />
        <Button title="Нет ответа" color="#f194ff" onPress={() => {}} />
        <Button title="Закончить" color="#f194ff" onPress={() => {}} />
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
