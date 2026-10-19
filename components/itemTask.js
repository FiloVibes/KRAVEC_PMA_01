import { Pressable, StyleSheet, Text } from "react-native";

export default function ItemTask({ title }) {
  function changeStyle() {
    console.log("Item pressed");
  }

  return (
    <Pressable onPress={changeStyle} style={styles.itemContainer}>
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
