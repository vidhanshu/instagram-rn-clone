import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NoPosts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Posts Yet</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:"45%"
  },
});
export default NoPosts;
