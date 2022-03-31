import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const PostHeader = ({ profile_picture, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profile_picture}
          source={{ uri: profile_picture }}
        />
        <Text style={styles.userName}>{user}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.postMenu}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_picture: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: "red",
  },
  userName: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  postMenu: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default PostHeader;
