import { Pressable, StyleSheet, Text } from "react-native";

export default function ItemTask({ task, changeStyle, deleteTask }) {
  return (
    <Pressable
      onPress={() => changeStyle(task.id)}
      onLongPress={() => deleteTask(task.id)}
      style={task.done ? styles.itemContainerDone : styles.itemContainer}
    >
      <Text style={styles.taskText}>{task.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#c25b5b",
  },
  taskText: {
    color: "white",
    fontSize: 10,
    padding: 5,
    fontWeight: "bold",
  },
});
