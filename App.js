import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [task, setTask] = useState("use state");

  function handleInputText(text) {
    setTask(text);
  }

  function handleAddButton() {
    console.log("ADD button pressed");
    setTask("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Zadaj ulohu ..."
        />
        <Button onPress={handleAddButton} title="ADD" />
      </View>

      <View style={styles.taskContainer}>
        <Text>{task}</Text>
        <Text>UDALOST 2</Text>
        <Text>UDALOST 3</Text>
        <Text>UDALOST 4</Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  input: {
    borderWidth: 4,
    backgroundColor: "#c25b5b",
    borderRadius: 8,
    width: "80%",
  },
  taskContainer: {
    flex: 3,
    /*backgroundColor: "#0020ad",*/
    borderTopWidth: 4,
    margin: 20,
    padding: 20,
  },
  inputContainer: {
    flex: 1,
    /*backgroundColor: "#ff0000"*/ flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
