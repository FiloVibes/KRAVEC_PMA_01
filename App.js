import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  function onPressAdd() {
    setCounter(counter + 1);
  }
  function onPressLower() {
    setCounter(counter - 1);
  }
  function onPressVynulovat() {
    setCounter(counter * 0);
  }

  return (
    <View style={styles.container}>
      <Text>Počítadlo objednávok</Text>
      <Text style={[styles.cislo, counter >= 5 && styles.varovanieCislo]}>
        {counter}
      </Text>
      <View style={styles.tlacidla}>
        <Button title="+" onPress={onPressAdd} />
        <Button title="-" onPress={onPressLower} disabled={counter === 0} />
      </View>
      <View style={styles.tlacidlo}>
        <Button title="Vynulovat" onPress={onPressVynulovat} />
      </View>
      {counter >= 5 && <Text style={styles.varovanie}>Dosiahnuty limit</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tlacidla: {
    flexDirection: "row",
    //    justifyContent: "space-between",
    //    width: 95,
    margin: 20,
    gap: 40,
  },
  tlacidlo: {
    margin: 20,
  },
  cislo: {
    fontSize: 60,
    fontWeight: "bold",
  },
  varovanieCislo: {
    fontSize: 60,
    fontWeight: "bold",
    color: "red",
  },
  varovanie: {
    fontSize: 15,
    color: "red",
  },
});
