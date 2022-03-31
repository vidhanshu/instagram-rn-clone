import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Story = ({ user, image, owner }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.outline}>
          <Image style={styles.profile} source={{ uri: image }} />
          {owner && (
            <View style={styles.addContainer}>
              <Text style={styles.add}>+</Text>
            </View>
          )}
        </View>
        <Text style={styles.userName}>{user}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  profile: {
    width: 70,
    borderRadius: 35,
    height: 70,
  },
  userName: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
    marginTop: 3,
  },
  outline: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#f20c6a",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addContainer: {
    backgroundColor: "#00abff",
    width: 25,
    height: 25,
    borderRadius: 12.5,
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  add: {
    color: "white",
  },
});
export default Story;
