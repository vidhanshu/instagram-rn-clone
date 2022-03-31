import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} />
      {/* FormikPostUploader.js */}
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});

const Header = ({ navigation }) => (
  <View style={styles.postHeader}>
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        style={styles.icon}
        source={{
          uri: "https://img.icons8.com/fluency-systems-filled/144/ffffff/back.png",
        }}
      />
    </TouchableOpacity>

    <Text style={styles.text}>NEW POST</Text>
    {/* hack : to center the component withing flex container you can add empty TEXT container */}
    <Text></Text>
  </View>
);
export default AddNewPost;
