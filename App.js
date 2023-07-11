import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{count}</Text>
      <Text className="font-bold text-2xl">taps</Text>
      <StatusBar style="auto" />
      <Button
        title="+"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title="-"
        onPress={() => {
          if (count == 0) {
            return;
          }
          setCount(count - 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: "100",
  },
});
