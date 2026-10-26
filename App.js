import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList } from "react-native";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import ItemTask from "./components/itemTask";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setTask(text);
  }

  function handleAddButton() {
    const id = Math.random().toString(10).slice(2);
    // console.log("id: ", id);
    setTaskList([...taskList, { title: task, done: false, id: id }]);
  }

  function changeStyleDone(id) {
    setTaskList(
      taskList.map((t) => {
        if (t.id == id) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      }),
    );
  }

  function handleDeleteTask(id) {
    setTaskList(taskList.filter((t) => t.id !== id));
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

      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <ItemTask
            task={item}
            changeStyle={changeStyleDone}
            deleteTask={handleDeleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
