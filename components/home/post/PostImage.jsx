import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
var WIDTH = Dimensions.get("window").width; //full width
var HEIGHT = Dimensions.get("window").height; //full height

const PostImage = ({ image }) => {
  return <Image style={styles.profile_pic} source={{ uri: image }} />;
};

const styles = StyleSheet.create({
  profile_pic: {
    width: WIDTH,
    height: HEIGHT / 2.4,
  },
});
export default PostImage;
