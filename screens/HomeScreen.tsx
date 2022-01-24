import { Button, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { HomeProps } from "../types";

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.start}>
        <Button
          title="Начать"
          color="#2196f3"
          onPress={() => navigation.navigate("Tests")}
        />
      </View>
      <View>
        <Button
          title="Настройки"
          color="#2196f3"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  start: {
    marginBottom: 15,
  },
});
